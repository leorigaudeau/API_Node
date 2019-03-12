const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:P@ssw0rd@cluster0-3kwrt.mongodb.net/BFB?retryWrites=true";
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true });

module.exports={mongoose}