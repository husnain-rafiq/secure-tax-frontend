/* eslint-disable no-use-before-define */

/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK,
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../app/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**',
      '**.js',
    )}`;
/* eslint-disable */

    try {
      execSync(`npm run prettify -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
    /* eslint-enable */

  });
  plop.setActionType('backup', (answers, config) => {
    /* eslint-disable */

    try {
      fs.copyFileSync(
        path.join(__dirname, config.path, config.file),
        path.join(
          __dirname,
          config.path,
          `${config.file}.${BACKUPFILE_EXTENSION}`,
        ),
        'utf8',
      );
      return path.join(
        __dirname,
        config.path,
        `${config.file}.${BACKUPFILE_EXTENSION}`,
      );
    } catch (err) {
      throw err;
    }
    /* eslint-enable */

  });
};

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
