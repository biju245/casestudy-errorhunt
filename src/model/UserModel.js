const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    uid : String,    
    pwd: String
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;
