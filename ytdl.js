const fs = require('fs');
const ytdl = require('ytdl-core');

const convertVideo = (url, name) => {
  ytdl(url, { filter: 'audioonly' })
    .pipe(fs.createWriteStream(`${name}.mp3`))
} 

module.exports = { convertVideo }