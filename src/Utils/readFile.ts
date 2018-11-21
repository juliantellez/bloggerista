/**
 * Wraps fs in a promise
 *
 * @param  {File} file
 */

import * as fs from "fs";

import File from "../Shared/Interfaces/File";

const readFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    fs.readFile(file.path, "utf8", (err, data) =>
      err ? reject(err) : resolve(data)
    );
  });

export default readFile;
