import * as path from "path";

import MarkDown from "./Shared/Interfaces/Markdown";

import Server from "./Server/main";
import parsePagesFromDir from "./Utils/parsePagesFromDir";
import parseMarkdownFromDir from "./Utils/parseMarkdownFromDir";
import renderBlogToHtml from "./Utils/renderBlogToHtml";
import writeToDisk from "./Utils/writeToDisk";

const PORT = 3000;
const server = new Server().app;

const INPUTDIR = "content";
const OUTPUTDIR = "public";
const inputPath = path.resolve(__dirname, `../${INPUTDIR}/`);
const outputPath = path.resolve(__dirname, `../${OUTPUTDIR}/`);

// THEMES
const themesPath = path.resolve(__dirname, `../themes/`);
const THEME = "bloggerista-theme";
const defaultLayoutPath = "Components/Layout/Layout";
const themeLayoutPath = path.resolve(
  `${themesPath}/${THEME}/${defaultLayoutPath}`
);

const themePages = "Pages";
const themePagesPath = path.resolve(`${themesPath}/${THEME}/${themePages}`);

const Layout = require(themeLayoutPath).default;

parseMarkdownFromDir(inputPath).then(data => {
  data.forEach((blog: MarkDown) => {
    // if (Boolean(blog.draft)) return;
    const url = blog.filePath.split(INPUTDIR).pop();

    const html = renderBlogToHtml(Layout, blog);

    const filePath = `${outputPath}${url.replace(".md", ".html")}`;
    writeToDisk(filePath, html, _err => {
      console.log(filePath);
    });

    server.get(url, (_req, res) => res.send(html));
  });
});

parsePagesFromDir(themePagesPath).then(data => {
  data.forEach(page => {
    const url = page.filePath
      .split(themePages)
      .pop()
      .replace(/\.(jsx?|tsx?)/g, ".html");

    const filePath = `${outputPath}${url.replace(/\.(jsx?|tsx?)/g, ".html")}`;
    writeToDisk(filePath, page.content, _err => {
      console.log(filePath);
    });
    server.get(url, (_req, res) => res.send(page.content));
  });
});

server.listen(PORT, () => {
  console.log("BLOGGERISTA SERVER listening on " + PORT);
});
