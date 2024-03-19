
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/profoo")
// mongoose.connect("mongodb+srv://mdgulamsabir9:EK5_2sTCQ4s3kfD@portfolio.qimdmjs.mongodb.net/portfolio?retryWrites=true&w=majority")
// mongoose.connect("mongodb+srv://mdgulamsabir9:<password>@portfolio.qimdmjs.mongodb.net/?retryWrites=true&w=majority")
const portfolio = mongoose.Schema({
    name: String,
    email:String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
