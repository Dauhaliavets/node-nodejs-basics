import path, { dirname } from 'path';
import { stdout } from 'process';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = 'files';
const fileName = 'fileToRead.txt';

const pathToFile = path.join(__dirname, targetFolder, fileName);

const read = async () => {
  const readStream = createReadStream(pathToFile);

  readStream.on('data', (chunk) => {
    stdout.write(chunk);
  });
};

await read();
