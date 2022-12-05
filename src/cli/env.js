const parseEnv = () => {
  const envObj = process.env;
  const results = [];

  for (const [key, value] of Object.entries(envObj)) {
    if (key.includes('RSS_')) {
      results.push(`${key}=${value}`);
    }
  }

  console.log(results.join('; '));
};

parseEnv();
