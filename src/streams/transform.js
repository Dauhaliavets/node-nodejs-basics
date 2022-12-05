import { stdin, stdout } from 'process';

const transform = async () => {
  stdin.on('data', (chunk) => {
    const reversedData = chunk.toString('utf-8').split('').reverse().join('');
    stdout.write(reversedData);
  });
};

await transform();
