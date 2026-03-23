#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node parse-json.mjs <path-to-file>');
  console.error('Example: node parse-json.mjs log.txt');
  process.exit(1);
}

try {
  const raw = readFileSync(filePath, 'utf8').trim();
  const parsed = JSON.parse(raw);
  const output = JSON.stringify(parsed, null, 2);

  const outPath = filePath.replace(/(\.\w+)?$/, '.out.json');
  writeFileSync(outPath, output, 'utf8');
  console.log(`Written to ${outPath}`);
} catch (err) {
  console.error('Failed to parse JSON:', err.message);
  process.exit(1);
}
