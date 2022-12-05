import path, { dirname } from 'path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const targetFolder = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const pathToFile = path.join(__dirname, targetFolder, fileName);

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(pathToFile);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
