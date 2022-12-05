import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = 'files';
const srcFileName = 'fileToCompress.txt';
const destFileName = 'archive.gz';

const pathToSrcFile = path.join(__dirname, targetFolder, srcFileName);
const pathToDestFile = path.join(__dirname, targetFolder, destFileName);

const compress = async () => {
  const zip = createGzip();
  const input = createReadStream(pathToSrcFile);
  const output = createWriteStream(pathToDestFile);
  input.pipe(zip).pipe(output);
};

await compress();
