import path from 'path';
import { readFile } from 'fs/promises';
import { errMsg, targetFolder } from './constants.js';
import { isFileExist } from './isFileExist.js';

const fileName = 'fileToRead.txt';
const rootPath = path.resolve();
const pathToFile = path.join(rootPath, targetFolder, fileName);

const read = async () => {
  const isExist = await isFileExist(pathToFile);

  if (!isExist) {
    console.error(errMsg);
    return;
  }

  const content = await readFile(pathToFile, { encoding: 'utf8' });
  console.log(content);
};

await read();
