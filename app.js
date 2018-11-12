const yargs = require('yargs');
const { convertVideo } = require('./ytdl');

const argv = yargs.options({
  url: {
    alias: 'u',
    describe: 'URL of the YouTube video to convert',
    type: 'string'
  },
  name: {
    alias: 'n',
    describe: 'Name to same the file as',
    type: 'string'
  }
})
  .demandOption(['url', 'name'], 'Please provide a url and name for the file')
  .help()
  .alias('help', 'h')
  .argv

convertVideo(argv.url, argv.name);
