const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');

const convertVideo = (url, name) => {
  let path = `${name}.mp4`;
  let video = ytdl(url, { filter: (format) => format.container === 'mp4' })
    .pipe(fs.createWriteStream(path));
  let process = new ffmpeg(path);
  process.then((video) => {
    video.fnExtractSoundToMP3(`${name}.mp3`, (err, file) => {
      if (err) {
        return console.log(`error: ${err}`);
      } 
      return file;
    });
  });
}


module.exports = { convertVideo }