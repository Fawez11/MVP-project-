const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const studentMange = express.Router()

  let StudentMange = require('./studentMange.model')
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/storage', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database successfully");
})
studentMange.route('/').get(function(req,res){
    studentMange.propfind(function(err,storage){
        if(err){
            console.log(err)
        }else {
            res.json(stotage)
        }
    })
})
  studentMange.route('/:id').get(function(req,res){
    let id = req.params.id
    studentMange.findById(id,function(err,storage){
        res.json(storage)
    })
  })
studentMange.route('/add').post(function(req,res){
    let studentMange = new studentMange (req,body)
    studentMange.save().then(studentMange=>{res.status(200).json({'storage':'studen add with succced'})
}).catch(err=>{
    res.status(400).send('add new student')
})
})

app.use('./storage', studentMange)
const PORT = 4000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});