const mongoose = require('mongoose');
const argv = require('yargs')

// if (argv.bdd) {
//     const uri = `mongodb+srv://admin:P@ssw0rd@cluster0-3kwrt.mongodb.net/${argv.bdd}?retryWrites=true`;
// } else {
//     const uri = `mongodb+srv://admin:P@ssw0rd@cluster0-3kwrt.mongodb.net/BFB?retryWrites=true`;
// }
const uri = `mongodb+srv://admin:P@ssw0rd@cluster0-3kwrt.mongodb.net/BFB?retryWrites=true`;

mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = { mongoose }