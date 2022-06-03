const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://libdatauser:libdb@pass@cluster0.gugpm6l.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uid : String,    
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;
