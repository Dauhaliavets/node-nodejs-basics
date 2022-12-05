import path from 'path';
import { writeFile } from 'fs/promises';
import { errMsg, targetFolder } from './constants';
import { isFileExist } from './isFileExist';

const content = 'I am fresh and young';
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

await create();
