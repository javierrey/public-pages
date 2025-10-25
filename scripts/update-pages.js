// update-pages.js
// `node ./scripts/update-pages.js`
// @ts-check

// import fs from 'fs';
import { spawn } from 'child_process';

// const fsP = fs.promises;
// const argv = process.argv.slice(2);
const base = '.';

spawn('echo', ['update-pages.sh running...']);

spawn('cp', ['-R', `${base}/apps/view/src/public/`, `${base}/`]);
