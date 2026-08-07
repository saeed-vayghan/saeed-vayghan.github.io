/* motion.js — scroll reveals, sticky header, scroll-spy, count-up, spotlight.
   Vanilla, no dependencies, no build step. Every effect is opt-out under
   prefers-reduced-motion. Keep this file small; it is the only JS besides
   theme.js on the critical path. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- header */
  var header = document.querySelector('body > header');
  if (header) {
    var stuck = false;
    var onScroll = function () {
      var should = window.scrollY > 24;
      if (should !== stuck) {
        stuck = should;
        header.classList.toggle('is-stuck', stuck);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------- hero on load */
  // The hero animates on load, never on scroll — nothing already visible fades in.
  requestAnimationFrame(function () {
    document.documentElement.classList.add('is-ready');
  });

  /* --------------------------------------------------------------- reveals */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);           // fires once, then stops
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* -------------------------------------------------------------- count-up */
  var metrics = document.querySelectorAll('.metric-value');
  if (metrics.length) {
    var countUp = function (el) {
      var raw = el.textContent.trim();
      var match = raw.match(/^(\d+)(.*)$/);
      if (!match) return;
      var target = parseInt(match[1], 10);
      var suffix = match[2] || '';
      var duration = 900;
      var start = null;
      var done = false;

      // Guarantee the real value is shown even if rAF never ticks
      // (backgrounded tab, throttled timers, headless renderers).
      var settle = function () {
        if (done) return;
        done = true;
        el.textContent = raw;
      };
      var guard = setTimeout(settle, duration + 500);

      var step = function (ts) {
        if (done) return;
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);   // ease-out cubic, mirrors --ease-out
        if (p >= 1) {
          clearTimeout(guard);
          settle();                            // restore the exact original string
          return;
        }
        el.textContent = Math.round(target * eased) + suffix;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!reduced && 'IntersectionObserver' in window) {
      var mo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          countUp(entry.target);
          mo.unobserve(entry.target);
        });
      }, { threshold: 0.6 });
      metrics.forEach(function (el) { mo.observe(el); });
    }
    // Reduced motion / no IO: the markup already contains the final value.
  }

  /* ------------------------------------------------------------ scroll-spy */
  var sections = [].slice.call(document.querySelectorAll('main section[id], .contact-band section[id]'));
  var navLinks = [].slice.call(document.querySelectorAll('nav ul li a[href^="#"]'));
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ------------------------------------------------------- copy to clipboard */
  var copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach(function (btn) {
    var timer = null;

    var flash = function () {
      btn.classList.add('is-copied');
      clearTimeout(timer);
      timer = setTimeout(function () { btn.classList.remove('is-copied'); }, 1800);
    };

    // execCommand path for non-secure contexts, where navigator.clipboard is absent
    var legacyCopy = function (text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    };

    // Last resort: select the address so the user can press Cmd/Ctrl+C.
    // Without this, a rejected clipboard write leaves the button doing nothing.
    var selectAddress = function () {
      var row = btn.closest('.contact-row');
      var addr = row && row.querySelector('.contact-value');
      if (!addr || !window.getSelection || !document.createRange) return;
      var range = document.createRange();
      range.selectNodeContents(addr);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };

    var fallback = function () {
      if (legacyCopy(btn.getAttribute('data-copy'))) { flash(); return; }
      selectAddress();
    };

    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(flash, fallback);
      } else {
        fallback();
      }
    });
  });

  /* ------------------------------------------------------ cursor spotlight */
  if (!reduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var spotlit = document.querySelectorAll('.card, .post-item, .competency-card');
    spotlit.forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }
})();
