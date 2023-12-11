
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Portfolionew')
const portfolio = new mongoose.Schema({
    name: String,
    email:String,
    mobile_no: Number,
    email_sub: String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
