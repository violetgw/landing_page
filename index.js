const port = 3000;
const express = require("express");
var session = require('express-session')
const app = express();
const path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const mongoose  = require("mongoose");
const uri = "mongodb+srv://violetfotogwzambrud:2t62A9s0slATxgcS@cluster0.6uboakq.mongodb.net/violet";
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Jakarta');


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);



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



// test mongose 


const akun = new mongoose.Schema({
  username : String,
  password : String,
  nama : String
});


const form_data = new mongoose.Schema({
  nama:String,
  nomer_telephone:String,
  jam:String
});


const data_form_data = new mongoose.model("form_datas",form_data);

const data_akun = mongoose.model("akun_violets",akun);

var kirim_form = new data_form_data({
  nama : "Moza Achmad Dani",
  nomer_telphone : "081932240030"
});

// kirim_form.save();




app.get('/',(req,res)=>{

    res.redirect("/landing_page");

});




app.get('/send_wa',async (req,res)=>{
  const currentTime = moment();

   const {wa_nama,nomer_telephone} = req.query;
   console.log(`Data Masuk ${wa_nama} pukul ${currentTime.format("HH:mm:ss")}`);

   const data_short_form =  await data_form_data.findOne({nama:wa_nama, nomer_telephone:nomer_telephone},`nama nomer_telphone`);

   if(data_short_form){

    res.redirect(`https://wa.me/6281290663757/?text=Assalamu'alaikum kak saya ${wa_nama} Mau tanya" terkait sarimbit.😉`)

   }
   else{

    const save_short_form = new data_form_data({
      nama:wa_nama,
      nomer_telephone:nomer_telephone,
      jam : currentTime.format("HH:mm:ss")

    });

    save_short_form.save();
    res.redirect(`https://wa.me/6281290663757/?text=Assalamu'alaikum kak saya ${wa_nama} Mau tanya" terkait sarimbit.😉`)
   
  }

    // res.redirect(`https://wa.me/6281290663757/?text=Assalamualaikum Kak, Saya, ${wa_nama}, baru saja mengisi formulir di website violetstore.id. Apakah produk Spesial SARIMBIT AZZURA 2024 masih tersedia? Mohon bantuan dan informasinya, ya Kak. Terima kasih atas bantuannya😉`)
});

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


// app.get("/test", async (req,res) => {



// });


app.get('/proses_login', async (req,res)=>{


if(req.session.username && req.session.password){
  res.redirect("/admin");
}
else{
  const {username,password} = req.query;


  const db_akun = await data_akun.findOne({username:username,password:password},"nama username password");
  
  
  
  if(db_akun){
    
    console.log("-------data ada------");  
    console.log(`Username :${db_akun.username}`);
    console.log(`Password :${db_akun.password}`);
    console.log(`nama :${db_akun.nama}`);
    req.session.username = db_akun.username;
    req.session.password = db_akun.password;
    req.session.nama = db_akun.nama;
  
    res.redirect("/admin");
  }
  else {
    console.log("-------data tidak ada------");
    res.redirect("/login?i=salah");
  
  }

}


});


app.get("/admin",(req,res) => {

if(req.session.username && req.session.password){

  res.render("admin",{
    nama : req.session.nama,
    username : req.session.username,
    pasword: req.session.password
  });

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