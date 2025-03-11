
const fs = require('fs');
const path = require('path');

const jsonFolder = path.join(__dirname, 'json');
const prefix = 'https://datosabiertos.gob.pe/dataset/';

fs.readdir(jsonFolder, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }
    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const filenameWithoutExt = path.basename(file, '.json');
            console.log(prefix + filenameWithoutExt);
        }
    });
});