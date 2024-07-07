const path = require('path');
const fs = require('fs');
require('dotenv').config();

const indexPath = path.join('', 'index.html');
console.log('### indexPath', indexPath);
const VITE_APP_CDN = process.env.VITE_APP_CDN;
const VITE_APP_OG_URL = process.env.VITE_APP_OG_URL;
const VITE_APP_OG_TWITTER_HANDLE = process.env.VITE_APP_OG_TWITTER_HANDLE;
console.log('# VITE_APP_CDN', VITE_APP_CDN);
console.log('# VITE_APP_OG_URL', VITE_APP_OG_URL);
console.log('# VITE_APP_OG_TWITTER_HANDLE', VITE_APP_OG_TWITTER_HANDLE);

fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) return console.log(err);
    let result = data.replace(/%%VITE_APP_CDN%%/g, VITE_APP_CDN);
    result = result.replace(/%%VITE_APP_OG_URL%%/g, VITE_APP_OG_URL);
    result = result.replace(/%%VITE_APP_OG_TWITTER_HANDLE%%/g, VITE_APP_OG_TWITTER_HANDLE);
    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});