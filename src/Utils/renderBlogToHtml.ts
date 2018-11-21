import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import MarkDown from "../Shared/Interfaces/Markdown";

const renderBlogToHtml = (Layout, blog: MarkDown) => {
  const reactJSX = React.createElement(Layout, {
    title: blog.title,
    markup: blog.content
  });

  return "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(reactJSX);
};

export default renderBlogToHtml;
