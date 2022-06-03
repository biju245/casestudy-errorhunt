const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
//mongoose.connect('mongodb+srv://libdatauser:libdb@pass@cluster0.gugpm6l.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
