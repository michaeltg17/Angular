// run-playwright.js
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const mutantId = process.env.__STRYKER_ACTIVE_MUTANT__ || 'unknown';
const logFile = path.resolve(process.cwd(), `playwright-${mutantId}.log`);

// overwrite per run
fs.writeFileSync(logFile, `Mutant ID: ${mutantId}\n`, 'utf-8');

const ps = spawn('npx', ['playwright', 'test'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true,
  env: process.env
});

ps.stdout.on('data', chunk => fs.appendFileSync(logFile, chunk));
ps.stderr.on('data', chunk => fs.appendFileSync(logFile, chunk));

ps.on('close', code => {
  fs.appendFileSync(logFile, `Process exited with code ${code}\n`);
  process.exit(code);
});
