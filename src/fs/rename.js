import path from 'path';
import { rename as renameFile } from 'fs/promises';
import { isFileExist } from './isFileExist.js';
import { errMsg, targetFolder } from './constants.js';

const rootPath = path.resolve();
const srcFileName = 'wrongFilename.txt';
const destFileName = 'properFilename.md';

const rename = async () => {
  const pathToSrcFile = path.join(rootPath, targetFolder, srcFileName);
  const pathToDestFile = path.join(rootPath, targetFolder, destFileName);

  const isExistSrcFile = await isFileExist(pathToSrcFile);
  const isExistDestFile = await isFileExist(pathToDestFile);

  if (isExistSrcFile && !isExistDestFile) {
    await renameFile(pathToSrcFile, pathToDestFile);
    return;
  }

  console.error(errMsg);
};

await rename();
