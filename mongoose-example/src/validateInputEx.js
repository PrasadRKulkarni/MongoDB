//npm install -g validator 
var mongoose = require('mongoose');
var validator = require('validator');

//Create connection to DB
mongoose.connect("mongodb://localhost:27017/PrasadMongoDB", {
    useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : true
}).then (function () {
    console.log("Connection successful.");
}).catch (function (err) {
    console.log(err);
});

//Define the schema
var playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number, 
    author: String,
    email: {
        type: String,
        validate(value)
        {
            if(!validator.IsEmail(value))
            {
                throw new Error("Email is invalid");
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//Create Mongoose Model - wrapper on Moongose schema.
//Provides a interface to database for creating, updating, deleting records
//Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//Insert document
const createDocument = async () => {
try {
    const myPlayList = new Playlist({
        name: "Angular JS",
        ctype: "Front End",
        videos: 80, 
        author: "Mahesh",
        email: "prasad123",
        active: true,
    })

    const result = await myPlayList.save();
    console.log(result);
    
    } catch (err) {
        console.log(err);
    }
}

createDocument();