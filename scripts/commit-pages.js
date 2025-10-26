// commit-pages.js
// `node ./scripts/commit-pages.js`
// @ts-check

// import fs from 'fs';
import { spawnSync } from 'child_process';

// const fsP = fs.promises;
// const argv = process.argv.slice(2);
// const base = '.';
const log = console.log; // eslint-disable-line

const dir = 'public';

log(spawnSync('echo', [`pages-commit.js running for ${dir}...`]).stdout.toString());

spawnSync('git', ['add', '-f', dir]);
spawnSync('git', ['commit', '-m', 'force commit github pages']);
log(`push stderr: `, spawnSync('git', ['push']).stderr.toString());
spawnSync('git', ['add', '.']);
spawnSync('git', ['rm', '--cached', '-r', dir]);
spawnSync('git', ['commit', '-m', 'end commit github pages']);
log(`push stderr: `, spawnSync('git', ['push']).stderr.toString());
