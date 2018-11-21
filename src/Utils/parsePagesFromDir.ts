import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import File from "../Shared/Interfaces/File";

import readDirectory from "./readDirectory";

interface Content {
  fileName: string;
  filePath: string;
  content: string;
}

const isJSX = (file: File) => file.name.match(/\.(jsx?|tsx?)/g);

const parsePagesFromDir = async dir => {
  const files: Array<File> = await readDirectory(dir);
  const data = [];

  for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
    const currentFile = files[fileIndex];
    if (isJSX(currentFile)) {
      const pageJSX = require(currentFile.path).default;
      const reactJSX = React.createElement(pageJSX);
      const html =
        "<!DOCTYPE html>" + ReactDOMServer.renderToStaticMarkup(reactJSX);

      const parsedFile: Content = {
        fileName: currentFile.name,
        filePath: currentFile.path,
        content: html
      };

      data.push(parsedFile);
    }
  }

  return data;
};

export default parsePagesFromDir;
