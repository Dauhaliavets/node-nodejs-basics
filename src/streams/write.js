import path, { dirname } from 'path';
import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = 'files';
const fileName = 'fileToWrite.txt';
const pathToFile = path.join(__dirname, targetFolder, fileName);

const write = async () => {
  const writeStream = createWriteStream(pathToFile);

  stdin.on('data', (chunk) => {
    writeStream.write(chunk);
  });
};

await write();
