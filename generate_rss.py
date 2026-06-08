import re
import os
from xml.sax.saxutils import escape
from datetime import datetime

with open('blog/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to extract post items
post_pattern = re.compile(
    r'<li class="post-item[^>]*>.*?<a href="\./([^"]+)">(.*?)</a>.*?<time>(.*?)</time>.*?<p>(.*?)</p>', 
    re.DOTALL
)

article_pattern = re.compile(
    r'<article class="blog-content">(.*?)</article>',
    re.DOTALL
)

matches = post_pattern.findall(content)

rss_header = """<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
    <title>Saeed Vayghan's Blog</title>
    <link>https://saeed-vayghan.github.io/blog/</link>
    <description>Thoughts on software engineering, AI, and continuous learning.</description>
    <language>en-us</language>
    <atom:link href="https://saeed-vayghan.github.io/rss.xml" rel="self" type="application/rss+xml" />
"""

rss_footer = """
</channel>
</rss>
"""

items = ""
for match in matches:
    filename = match[0]
    link = "https://saeed-vayghan.github.io/blog/" + filename
    # Clean up the title by stripping tags if any
    title = re.sub(r'<[^>]+>', '', match[1]).strip()
    date_str = match[2].strip()
    short_description = match[3].strip()
    
    # parse date
    dt = datetime.strptime(date_str, "%B %d, %Y")
    pubDate = dt.strftime("%a, %d %b %Y 00:00:00 +0000")
    
    # Extract full content
    full_content = ""
    post_path = os.path.join('blog', filename)
    if os.path.exists(post_path):
        with open(post_path, 'r', encoding='utf-8') as pf:
            post_html = pf.read()
            article_match = article_pattern.search(post_html)
            if article_match:
                full_content = article_match.group(1).strip()
    
    items += f"""
    <item>
        <title>{escape(title)}</title>
        <link>{link}</link>
        <guid>{link}</guid>
        <pubDate>{pubDate}</pubDate>
        <description>{escape(short_description)}</description>
        <content:encoded><![CDATA[{full_content}]]></content:encoded>
    </item>"""

with open('rss.xml', 'w', encoding='utf-8') as f:
    f.write(rss_header + items + rss_footer)
