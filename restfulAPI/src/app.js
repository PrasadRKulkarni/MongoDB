//Package.json can be at folder level which is called as Local 
//and outside main project which is a global

//npm init -y --> in the folder level that you need as local.
//npm i express
//npm i mongoose
//npm i validator
//npm i nodemom

var express = require('express');
var app = express();
var Student = require('./studentModel');
require('./conn.js');
var port = 8000;

app.use(express.json());

app.listen(port, function(){
    console.log('Server is listening at port : ' + port);
});

app.get('/', function (req, res) {
    res.send('Hello Testing ......!!!')
});

//Hit from postman to post data. print screen in folder
/*In Postman enter this in body section
{
	"name" : "Prasad",
	"email": "PasadKulkarni@gmail.com",
	"phone" : 8454856756,
	"address" : "Mumbai"
}
*/
//This is done using Promise method.
app.post('/students', function(req, res){
    console.log("Recvd request");
    res.send('Hello Post Method!!!')
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(function () {
        res.status(201).send(user);
    })
    .catch((e) => {
            res.status(400).send(e);
    });

});

//Same thing is done using Asynch Await
app.post('/students', async function(req, res){
    try
    {
        const user = new Student(req.body);
        const createUser= await user.save()
        res.status(201).send(user);
    }
    catch(err)
    {
        res.status(400).send(e);
    }
});

//Get All Data
app.get('/students', async function (req, res)
{
    const studentsData = await Student.find();
    res.send(studentsData);    
});

//Get Individual student data
app.get('/students/:id', async function (req, res)
{
    const _id = req.params.id;
    const studentData =  await Student.findById(_id);
    console.log(studentData);
    res.send(studentData);
}); 

//Delete by id
app.delete('/students/:id', async function(req, res){
    const deletestudentData =  await Student.findByIdAndDelete(req.params.id);
    res.send(deletestudentData);
});

//Patch - update only one field.
app.patch('/students/:id', async function (req, res) {
    const updateStudentData =await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send(updateStudentData);
});