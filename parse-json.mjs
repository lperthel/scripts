#!/usr/bin/env node

const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  const raw = Buffer.concat(chunks).toString().trim();
  try {
    const parsed = JSON.parse(raw);
    console.log(JSON.stringify(parsed, null, 2));
  } catch (err) {
    console.error('Failed to parse JSON:', err.message);
    process.exit(1);
  }
});
