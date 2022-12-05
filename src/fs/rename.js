import path from 'path';
import { rename as renameFile, access, constants } from 'fs/promises';

const errMsg = 'FS operation failed';
const srcFileName = 'wrongFilename.txt';
const destFileName = 'properFilename.md';
const targetFolder = 'src/fs/files';
const root = path.resolve();

const rename = async () => {
  const pathToSrcFile = path.join(root, targetFolder, srcFileName);
  const pathToDestFile = path.join(root, targetFolder, destFileName);

  const isExistSrcFile = await isFileExist(pathToSrcFile);
  const isExistDestFile = await isFileExist(pathToDestFile);

  if (isExistSrcFile && !isExistDestFile) {
    await renameFile(pathToSrcFile, pathToDestFile);
    return;
  }

  console.error(errMsg);
};

const isFileExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

await rename();
