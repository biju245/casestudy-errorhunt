const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
//mongoose.connect('mongodb+srv://libdatauser:libdb@pass@cluster0.gugpm6l.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
