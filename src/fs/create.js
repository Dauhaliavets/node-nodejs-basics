import path from 'path';
import { writeFile, access, constants } from 'fs/promises';

const content = 'I am fresh and young';
const errMsg = 'FS operation failed';
const targetFolder = 'src/fs/files';
const targetFileName = 'fresh.txt';
const root = path.resolve();
const targetPath = path.join(root, targetFolder, targetFileName);

const create = async () => {
  const isExist = await isFileExist(targetPath);

  if (isExist) {
    console.error(errMsg);
  } else {
    await writeFile(targetPath, content);
  }
};

const isFileExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

await create();
