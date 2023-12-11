
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mdgulamsabir9:xUi5jfWweMiSuaMJ@cluster0.3yqgcqg.mongodb.net/?retryWrites=true&w=majority')
const portfolio = new mongoose.Schema({
    name: String,
    email:String,
    mobile_no: Number,
    email_sub: String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
