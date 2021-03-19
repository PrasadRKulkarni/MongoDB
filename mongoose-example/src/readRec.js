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


const Playlist = new mongoose.model("Playlist", playlistSchema);


const getDocument = async () =>
{
    //Get all records
    // const result = await Playlist.find();
    // console.log(result);

    //Get Count of Records
    // const result = await Playlist.find().countDocuments();
    // console.log('Count of records : ' + result);

    //Sort
    const result = await Playlist.find().select({name : 1}).sort("name : 1");
    console.log(result);

    //Select one column from all column
    //const result1 = await Playlist.find().select({name : 1});
    //console.log(result1);

    // console.log("------------------------------------------------------------------");
    //Filter using Find and Limit is Top 1
    //const result1 = await Playlist.find({ctype: "Front End"}).limit(1); 
    //console.log(result1);

    //Greater than comparison
    // const result1 = await Playlist.find({videos: {$gt : 80}});
    // console.log(result1);

    //OR Operator
    // const result1 = await Playlist.
    //                       find({$or: [
    //                           {ctype: "Front End"},
    //                           {author: "Prasad"}
    //                     ]});
    // console.log(result1);

    

}

getDocument();
