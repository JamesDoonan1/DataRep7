const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.kwtode8.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//constructor - make a promise below
const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
})

const bookModel = mongoose.model('books', bookSchema);

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/book', (req,res)=>{
    console.log(req.body);
    bookModel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })

    .then(()=>{res.send("Book Created")})
    .catch(()=>{res.send("Book not Created")})
    
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//this method is now async ... wait until finished
app.get('/api/book', async (req, res)=>{
    let books = await bookModel.find({});
    //go to database and pull back records
    res.json(books);

})

app.get("/api/book/:id", async (req,res)=>{
  //pull parameter from id
  console.log(req.params.id);

  //
  let book = await bookModel.findById({_id:req.params.id})
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})