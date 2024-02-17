
const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://mdgulamsabir9:1BQUzRsfi91dZPEq@new-portfolio.8yefuo6.mongodb.net/?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://mdgulamsabir9:v20.9.0@cluster0.5dedhyw.mongodb.net/?retryWrites=true&w=majority")
const portfolio = new mongoose.Schema({
    name: String,
    email:String,
    mobile_no: Number,
    email_sub: String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
