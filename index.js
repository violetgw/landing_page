const port = 3000;
const express = require("express");
var session = require('express-session')
const app = express();
const path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { Schema, default: mongoose } = require("mongoose");
const uri = "mongodb+srv://violetfotogwzambrud:2t62A9s0slATxgcS@cluster0.6uboakq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




//untuk session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

// Gunakan middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(favicon(path.join(__dirname, 'public', 'icon_violet.ico')));
app.use(express.static(path.join(__dirname, 'public')));



// tets mongose 


const akun = new mongoose.Schema({
  username : String,
  password : String,
  nama : String
});

const data_akun = mongoose.model("akun_violets",akun);

// var data_a




app.get('/',(req,res)=>{

    res.redirect("/landing_page");

});




app.get('/send_wa',async (req,res)=>{

   const wa_nama = req.query.wa_nama;

    res.redirect(`https://wa.me/6281290663757/?text=Assalamualaikum Kak, Saya, ${wa_nama}, baru saja mengisi formulir di website violetstore.id. Apakah produk Spesial SARIMBIT AZZURA 2024 masih tersedia? Mohon bantuan dan informasinya, ya Kak. Terima kasih atas bantuannya😉`)
})

app.get('/landing_page', async (req, res)=> {

res.render('landing_page_dua');

});


app.get('/login',(req,res) => {

const info_login = req.query;


if(req.session.username && req.session.password){

  res.redirect("/admin");

}
else{
  res.render('login',{
    info_login: info_login
});
}


});

app.get('/proses_login',(req,res)=>{

const {username,password} = req.query;

console.log(username);
console.log(password);

req.session.username = username;
req.session.password = password;

console.log(`username : ${req.session.username}`);
console.log(`password : ${req.session.password}`);


if(req.session.username && req.session.password){

  res.redirect("/admin");

}
else {
  res.render("admin")
}

});


app.get("/admin",(req,res) => {

if(req.session.username && req.session.password){

  res.render("admin");

}
else{
  res.redirect("/login");
}

});

app.get("/logout",(req,res)=>{

req.session.destroy();

res.redirect("/login");

})



console.log("dia berjalan");
app.listen(port,(req, res) => console.log(`berjalan di port ${port}` ));