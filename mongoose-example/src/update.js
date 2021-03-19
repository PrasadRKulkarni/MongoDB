var mongoose = require('mongoose');

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

const updateDoc = async (_id) =>{

    const result = await Playlist.updateOne({_id}, 
        {
            $set : {
                name: "xyzdfkksdlfdslkfj"
            }
        });

        console.log(result);
}

updateDoc("604b7950ebe89e6ab05bfcf0");