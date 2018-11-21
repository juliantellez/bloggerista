import * as parseMarkdown from "marked";

import File from "../Shared/Interfaces/File";
import Markdown from "../Shared/Interfaces/Markdown";

const parseFrontMatter = string => {
  return string.split("\n").reduce((output, next) => {
    const index = next.indexOf(":");
    if (index > 0) {
      output[next.substring(0, index)] = next
        .substring(index + 1)
        .replace(new RegExp(/"/, "g"), "")
        .trim();
    }
    return output;
  }, {});
};

/**
 * Strips frontMatter
 *
 * @param  {String<html>} markdown=""
 */

const stripData = (markdown = "") => {
  const TAG = "---";

  const [, metadata = {}, rawContent = markdown] = markdown.split(TAG);

  const parsedMetadata = parseFrontMatter(metadata);

  return {
    rawContent,
    parsedMetadata
  };
};

/**
 * Creates the markdown schema
 *
 * @param  {File} file
 * @param  {String<html>} fileContent
 */

const markdownParser = (file: File, fileContent) => {
  const { rawContent, parsedMetadata } = stripData(fileContent);

  const markdown: Markdown = {
    ...parsedMetadata,
    fileName: file.name,
    filePath: file.path,
    content: parseMarkdown(rawContent)
  };

  return markdown;
};

export default markdownParser;
