import path from 'path';
import { mkdir, copyFile, readdir } from 'fs/promises';
import { errMsg, targetFolder } from './constants';

const destFolder = 'src/fs/files_copy';

const copy = async () => {
  try {
    const isExistSrcFolder = await isExistFolder(targetFolder);
    const isExistDestFolder = await isExistFolder(destFolder);

    if (isExistSrcFolder && !isExistDestFolder) {
      await mkdir(destFolder, { recursive: true });
      const files = await readdir(targetFolder, { withFileTypes: true });
      for (const { name } of files) {
        copyFile(path.join(targetFolder, name), path.join(destFolder, name));
      }
    } else {
      throw Error;
    }
  } catch (error) {
    console.error(errMsg);
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

copy();
