import path from 'path';
import { readFile, access, constants } from 'fs/promises';

const errMsg = 'FS operation failed';
const fileName = 'fileToRead.txt';
const targetFolder = 'src/fs/files';
const pathToFile = path.join(path.resolve(), targetFolder, fileName);

const read = async () => {
  const isExist = await isFileExist(pathToFile);

  if (!isExist) {
    console.error(errMsg);
    return;
  }

  const content = await readFile(pathToFile, { encoding: 'utf8' });
  console.log(content);
};

const isFileExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

await read();
