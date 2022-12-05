import path from 'path';
import { readdir, access } from 'fs/promises';
import { errMsg, targetFolder } from './constants.js';

const rootPath = path.resolve();
const pathToFolder = path.join(rootPath, targetFolder);

const list = async () => {
  const isExist = await isExistFolder(pathToFolder);

  if (!isExist) {
    console.error(errMsg);
    return;
  }

  const files = await readdir(targetFolder, { withFileTypes: true });
  for (const { name } of files) {
    console.log(name);
  }
};

const isExistFolder = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

await list();
