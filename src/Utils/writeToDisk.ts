import * as path from "path";
import * as fs from "fs";

const writeToDisk = (filePath, content, done) => {
  const dirPath = path.dirname(filePath);
  const dirPathExists = fs.existsSync(dirPath);
  if (!dirPathExists) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFile(filePath, content, "utf-8", done);
};

export default writeToDisk;
