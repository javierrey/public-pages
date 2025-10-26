// update-pages.js
// `node ./scripts/update-pages.js`
// @ts-check

// import fs from 'fs';
import { spawnSync } from 'child_process';

// const fsP = fs.promises;
// const argv = process.argv.slice(2);
const base = '.';
const log = console.log; // eslint-disable-line

log(spawnSync('echo', ['update-pages.js running...']).stdout);

spawnSync('cp', ['-R', `${base}/apps/view/src/public/`, `${base}/`]);
