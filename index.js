import * as fs from 'node:fs';

const dumpFolderPath = './dump'; // Path to the dump folder

// test path to the dump folder
try {
    if (!fs.existsSync(dumpFolderPath)) {
        throw new Error("Dump folder does not exist");
    }
    console.log('Dump folder exists:', dumpFolderPath);
} catch (err) {
    console.error('Error accessing dump folder: ', err.message);
    process.exit(1);
}
// create subdir if it does not exist, and move files to it

// rename files in subdir



console.log("eop");
