import { access, constants } from 'fs/promises';

const isFileExist = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

export { isFileExist };
