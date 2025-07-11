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

// if the dump folder has sub-dir, ignore them, just read the root level files

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
            const targetDir = `${dumpFolderPath}/_${subDir}_`;
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }

            // move the file to the subdir
            fs.renameSync(`${dumpFolderPath}/${fileName}`, `${targetDir}/${fileName}`);
            // console.log(`Moved ${fileName} to ${subDir}`);

        } else {
            console.log(`Skipping directory: ${fileName}`);
        }
    });

// rename files in subdir

// get all subdirectories in the dump folder
const possibleSubDirs = ['_images_', '_videos_', '_audio_', '_documents_', '_others_'];
const subDirs = fs.readdirSync(dumpFolderPath).
    filter(fileName => !isFile(`${dumpFolderPath}/${fileName}`))
    .filter(fileName => possibleSubDirs.includes(fileName));

console.log("Subdirectories found:", subDirs);

// rename files in each subdir

subDirs.map(dir => {
    const dirPath = `${dumpFolderPath}/${dir}`;
    console.log(`Processing directory: ${dirPath}`);
    let fileCount = 1;
    let fileType = dir.replace(/_/g, '').toLowerCase(); // remove underscores and convert to lowercase
    fs.readdirSync(dirPath).forEach(fileName => {
        const filePath = `${dirPath}/${fileName}`;
        if (isFile(filePath)) {
            // remove special characters from the file name
            const newFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, `${fileCount++}_${fileType}`);
            const newFilePath = `${dirPath}/${newFileName}`;

            // rename the file if the name has changed
            if (newFileName !== fileName) {
                fs.renameSync(filePath, newFilePath);
                // console.log(`Renamed ${fileName} to ${newFileName}`);
            } else {
                // console.log(`No renaming needed for ${fileName}`);
            }
        } else {
            console.log(`Skipping non-file item: ${fileName}`);
        }
    });
})

console.log("eop");
