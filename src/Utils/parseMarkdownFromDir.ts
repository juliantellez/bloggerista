import * as path from "path";

import File from "../Shared/Interfaces/File";

import readDirectory from "./readDirectory";
import markdownParser from "./markdownParser";
import readFile from "./readFile";

const MARKDOWN_EXTENSION = ".md";

const parseMarkdownFromDir = async dir => {
  const files: Array<File> = await readDirectory(dir);
  const data = [];

  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    if (path.extname(currentFile.name) === MARKDOWN_EXTENSION) {
      const fileContent = await readFile(currentFile);
      data.push(markdownParser(currentFile, fileContent));
    }
  }

  return data;
};

export default parseMarkdownFromDir;
