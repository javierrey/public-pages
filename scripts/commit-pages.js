// commit-pages.js
// `node ./scripts/commit-pages.js`
// @ts-check

// import fs from 'fs';
import { spawnSync } from 'child_process';

// const fsP = fs.promises;
// const argv = process.argv.slice(2);
// const base = '.';
const log = console.log; // eslint-disable-line

log(spawnSync('echo', ['pages-commit.js running...']).stdout.toString());

spawnSync('git', ['add', '-f', 'public']);
spawnSync('git', ['commit', '-m', 'force commit github pages']);
log(spawnSync('git', ['push']).stdout.toString());
spawnSync('git', ['add', '.']);
spawnSync('git', ['commit', '-m', 'force end commit github pages']);
spawnSync('git', ['push']);
