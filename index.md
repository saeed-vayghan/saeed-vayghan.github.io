# Website Structure Map

This file acts as a directory map for the entire static website. **Whenever a new file is created or an old one is deleted, this file must be updated to reflect the new structure.**

```text
/
├── index.html                  (Home and About Me page)
├── index.md                    (This file - Website structure map)
├── README.md                   (Project documentation and guide)
├── statics/                    (Global assets folder)
│   ├── styles.css              (Global minimalist styling and layout)
│   └── theme.js                (Dark/Light mode toggling logic)
├── projects/                   (Projects section)
│   ├── index.html              (Project list/index page)
│   ├── project-template.html   (Template for new project pages)
│   ├── file-search-rag-with-gemini.html (File Search SaaS project)
│   ├── mitra.html              (Mitra: The AI Agent Party)
│   └── sweden-salary-calc.html (Sweden Salary Calculator tool)
└── blog/                       (Blog section)
    ├── index.html              (Blog post list/index page)
    ├── post-template.html      (Template for new blog posts)
    ├── skillspector.html       (Securing Your AI Agent Workflows with SkillSpector - May 27, 2026)
    ├── spec-driven-development-part-2.html (Why Spec Driven Development Part 2: The Framework - May 10, 2026)
    ├── spec-driven-development-part-1.html (Why Spec Driven Development Part 1: The Three Problems - May 10, 2026)
    ├── claude-code-best-practices.html (Claude Code Best Practices guide - April 20, 2026)
    ├── harness-engineering.html (Harness Engineering guide - April 10, 2026)
    ├── context-fix-strategies.html (Context Fix Strategies guide - March 30, 2026)
    ├── context-engineering.html (Context Engineering guide - March 20, 2026)
    ├── prompt-engineering.html (Prompt Engineering guide - March 10, 2026)
    ├── caveman-method-llm-prompting.html (Caveman method prompting framework - February 28, 2026)
    ├── recursive-language-models.html (Recursive Language Models overview - February 20, 2026)
    ├── gemini-cli-multi-agent-architecture.html (Multi-agent architecture analysis - February 10, 2026)
    ├── intercepting-llm-prompts-mitmproxy.html (Intercepting LLM prompts with mitmproxy - January 30, 2026)
    ├── agy-security-part-1.html   (Terminal Sandbox security post - January 20, 2026)
    └── 01-LLM-tools-analysis.html (Interactive LLM framework analysis - January 10, 2026)
```

## How to add a new Blog Post or Project

1. **New Project**: Copy `projects/project-template.html`, rename it, add your content, and update the list inside `projects/index.html`.
2. **New Blog Post**: Copy `blog/post-template.html`, rename it, add your content, and update the list inside `blog/index.html`.
3. **Update this map**: Add the new file to the tree structure above.
4. **Header/Footer Consistency**: If you aren't using the templates, always copy the `<header>` and `<footer>` sections from an existing page to ensure global navigation works.
