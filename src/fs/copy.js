import path from 'path';
import { access, mkdir, copyFile, readdir } from 'fs/promises';

const errMsg = 'FS operation failed';
const srcFolder = 'src/fs/files';
const destFolder = 'src/fs/files_copy';

const copy = async () => {
  try {
    const isExistSrcFolder = await isExistFolder(srcFolder);
    const isExistDestFolder = await isExistFolder(destFolder);

    if (isExistSrcFolder && !isExistDestFolder) {
      await mkdir(destFolder, { recursive: true });
      const files = await readdir(srcFolder, { withFileTypes: true });
      for (const { name } of files) {
        copyFile(path.join(srcFolder, name), path.join(destFolder, name));
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
