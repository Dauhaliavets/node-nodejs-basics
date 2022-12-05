import path, { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = 'files';
const srcFileName = 'archive.gz';
const destFileName = 'fileToCompress.txt';

const pathToSrcFile = path.join(__dirname, targetFolder, srcFileName);
const pathToDestFile = path.join(__dirname, targetFolder, destFileName);

const decompress = async () => {
  const unZip = createUnzip();
  const input = createReadStream(pathToSrcFile);
  const output = createWriteStream(pathToDestFile);
  input.pipe(unZip).pipe(output);
};

await decompress();
