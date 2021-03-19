var mongoose = require('mongoose');
var validator = require('validator');

//Define the schema
var studentSchema = new mongoose.Schema({
    name: {
        type: String
        //required: true,
        //minlength: 3
    },    
    email: {
        type: String
        //unique: [true, "Email Id is already present"]//,
        // validate(value)
        // {
        //     if(!validator.IsEmail(value))
        //     {
        //         throw new Error("Email is invalid");
        //     }
        // }
    },
    phone: {
        type: Number
        // min : 10
    },
    address: String    
});

//Create a model - create a new collection
var Student = new mongoose.model('Student', studentSchema)

//Export this module to app.js
module.exports = Student;