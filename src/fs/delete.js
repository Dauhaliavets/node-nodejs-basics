import path from 'path';
import { isFileExist } from './isFileExist.js';
import { rm } from 'fs/promises';
import { errMsg, targetFolder } from './constants.js';

const rootPath = path.resolve();
const targetFileName = 'fileToRemove.txt';
const pathToFile = path.join(rootPath, targetFolder, targetFileName);

const remove = async () => {
  const isExist = await isFileExist(pathToFile);

  if (!isExist) {
    console.error(errMsg);
    return;
  }

  await rm(pathToFile);
};

await remove();
