const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {mongoose} = require('mongoose');
const {Todo} = require('./models/todo');

app.use(bodyParser.json());

// app.post('/note',(req,res)=>{
//     const note = new impmodel.Note({
//         auteur: req.body.auteur,
//         text:req.body.text
//     });
//     note.save().then(note => {
//         res.send(note);
//     }, e => {
//         res.status(500).send(e);
//     });
// })

// app.post('/user',(req,res)=>{
//     const user = new impmodel.User({
//         identifiant: req.body.identifiant,
//         motdepass:req.body.motdepass
//     });
//     user.save().then(user => {
//         res.send(user);
//     }, e => {
//         res.status(500).send(e);
//     });
// })

app.get('/todo',(req,res)=>{
    
    Todo.find().then(todoList => {
        res.json(todoList);

    },err => {
        res.status(500).send(err);
    })

})

app.delete("/todo/:id", (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
      res.status(404).send();
    }
    modelTodo
      .findByIdAndRemove(id)
      .then(todo => {
        if (!todo) {
          res.status(404).send();
        }
        res.send(todo);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });


console.log('Nous disposons votre serveur sur le port:3000');
app.listen(3000,()=>{
    console.log("connect on 3000")
});