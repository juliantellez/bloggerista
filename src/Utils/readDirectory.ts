/**
 * Recursive directory search
 *
 * @param  {string} dirPath
 * @param  {err, Array<File>} done
 *
 */

import * as path from "path";
import * as fs from "fs";

import File from "../Shared/Interfaces/File";

const readDir = (dirPath, done) => {
  let files: Array<File> = [];

  fs.readdir(dirPath, (err, dirList: Array<string>) => {
    if (err) return done(err);

    let dirLength = dirList.length;
    if (!dirLength) return done(null, files);

    dirList.forEach((file: string) => {
      const innerDirPath = path.resolve(dirPath, file);

      fs.stat(innerDirPath, (_err, stats: fs.Stats) => {
        const isDirectory = stats.isDirectory();

        if (isDirectory) {
          readDir(innerDirPath, (_err, innerFiles) => {
            files = files.concat(innerFiles);
            if (!--dirLength) done(null, files);
          });
        } else {
          const foundFile: File = {
            name: file,
            path: innerDirPath
          };

          files.push(foundFile);
          if (!--dirLength) done(null, files);
        }
      });
    });
  });
};

const readDirectory = dirPath =>
  new Promise<Array<File>>((resolve, reject) =>
    readDir(dirPath, (err, data) => (err ? reject(err) : resolve(data)))
  );

export default readDirectory;
