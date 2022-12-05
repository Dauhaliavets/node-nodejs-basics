import { argv } from 'node:process';

const parseArgs = () => {
  const variablesObj = argv.reduce((acc, cur, curInd) => {
    if (curInd % 2 === 0 && curInd > 1) {
      const curWithoutPrefix = cur.slice(2);
      acc[curWithoutPrefix] = argv[curInd + 1];
      return acc;
    }
    return acc;
  }, {});

  const results = [];

  for (const [key, value] of Object.entries(variablesObj)) {
    results.push(`${key} is ${value}`);
  }

  console.log(results.join(', '));
};

parseArgs();
