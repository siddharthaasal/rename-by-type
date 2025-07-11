import * as fs from 'node:fs';
import { isFile } from './util.js';

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

// if the dump folder has sub-dir, ignore them, jsut read the root level files

fs.readdirSync(dumpFolderPath)
    .map(fileName => {
        if (isFile(`${dumpFolderPath}/${fileName}`)) {
            // console.log(`Processing file: ${fileName}`);

            // determine the file type based on the extension
            const fileExtension = fileName.split('.').pop().toLowerCase();
            let fileType = '';
            if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
                fileType = 'images';
            } else if (['mp4', 'mkv', 'avi', 'mov'].includes(fileExtension)) {
                fileType = 'videos';
            } else if (['mp3', 'wav', 'flac'].includes(fileExtension)) {
                fileType = 'audio';
            } else if (['pdf', 'doc', 'docx', 'txt'].includes(fileExtension)) {
                fileType = 'documents';
            } else {
                fileType = 'others';
            }

            // create subdir if it does not exist
            let subDir = fileType;
            const targetDir = `${dumpFolderPath}/${subDir}`;
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }

            // move the file to the subdir
            fs.renameSync(`${dumpFolderPath}/${fileName}`, `${targetDir}/${fileName}`);
            console.log(`Moved ${fileName} to ${subDir}`);

        } else {
            console.log(`Skipping directory: ${fileName}`);
        }
    });

// rename files in subdir



console.log("eop");
