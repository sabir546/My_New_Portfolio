
const mongoose = require('mongoose');
//  mongoose.connect("mongodb+srv://mdgulamsabir9:dSjyQQn9YriDAPxJ@cluster3.ht3hvni.mongodb.net/?retryWrites=true&w=majority") 
// mongoose.connect("mongodb+srv://mdgulamsabir9:dSjyQQn9YriDAPxJ@cluster3.ht3hvni.mongodb.net/")
mongoose.connect("mongodb://127.0.0.1:27017/profoo")
const portfolio = mongoose.Schema({
    name: String,
    email:String,
    message: String,
})
module.exports = mongoose.model('database', portfolio)
