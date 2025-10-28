// update-pages.js
// `node ./scripts/update-pages.js`
// @ts-check

import fs from 'fs';
import { spawnSync } from 'child_process';

const argv = process.argv.slice(2);
const fsP = fs.promises;
const log = console.log; // eslint-disable-line
const base = '.';

const apps = argv.map((app) => app.replace(/^['"`]|['"`]$/g, ''));
const dir = 'public';

log(spawnSync('echo', [`update-pages.js for ${dir}: [${apps}]`]).stdout.toString());

/** @param {string} app */
const copyGithubPages = (app) => {
  const src = `${base}/apps/${app}/src/${dir}`;
  if (!fs.existsSync(src)) { return -1; }
  const dest = `${base}/${dir}/${app}`;
  spawnSync('mkdir', ['-p', dest]);
  spawnSync('cp', ['-R', `${src}/.`, dest]);
  return 0;
};

/** @param {string[]} apps, @param {string} title */
const copyAndIndex = (apps, title) => {
    let html = `<html><head><title>${title}</title></head><body><h3>${title}</h3><ul>`;
    apps.forEach((app) => {
      const exit = copyGithubPages(app);
      if (!exit) { html += `<li><a href="./${app}">${app}</a></li>`; }
    });
    html += '</ul></body></html>';
    fsP.writeFile(`${base}/${dir}/index.html`, html);
};

copyAndIndex(apps, 'javierrey.github.io/public-pages');
