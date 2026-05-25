# Saeed Vayghan - Personal Website & Blog

This is the repository for my personal website, portfolio, and blog, deployed on GitHub Pages.

## 🏗️ Architecture

This project is built using a **pure static structure** with absolutely no build system (No Node, No Vite, No Webpack).
- **HTML/CSS**: Standard, raw HTML and CSS.
- **Marked.js & DOMPurify**: Used via CDN inside `post.html` to dynamically render Markdown files into HTML directly in the browser.

## 📂 Website Structure

- `index.html`: The Home and About Me page.
- `projects/index.html`: A showcase of my recent tools and projects.
- `blog/01-LLM-tools-analysis.html`: An interactive dashboard analyzing LLM tools.

---

## 💻 Local Testing

Since there is no build server, you can view the website locally in two ways:

1. **Direct File Open**: Simply double click any `.html` file to open it in your browser.
2. **Simple Local Server (Recommended)**: If you have Python installed, open your terminal in the root folder and run:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## 📝 How to Update or Create a Page

### 1. Updating an Existing Page
Simply open the corresponding `.html` file (e.g., `index.html` or `projects/index.html`) in any text editor and edit the HTML. 

### 2. Creating a New Page
If you want to add a completely new page (e.g., a `contact` page):
1. Create a folder `contact/` and inside it create an `index.html`.
2. Update the `<nav>` section in **all** existing HTML files to include a link to `<a href="/contact/index.html">Contact</a>`.

---

## 🚀 How to Publish Live

Since GitHub Pages natively serves pure static sites, there's no need for complex deployment pipelines. Whenever you want to publish your changes live:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Updated website"
   ```
2. Push to the master branch:
   ```bash
   git push origin master
   ```

GitHub Pages will automatically detect the changes to your HTML files and update the live site within a minute!
