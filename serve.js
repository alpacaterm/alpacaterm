const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const Web = require("./bin/web/index")
let home = argv.home
Web(3000, home)
