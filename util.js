// ./util.js
import * as fs from 'node:fs';

function isFile(fileName) {
    return fs.lstatSync(fileName).isFile();
}

export { isFile };