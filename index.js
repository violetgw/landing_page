const port = 3000;
const express = require("express");
const app = express();
const path = require('path');
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')


// Gunakan middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(favicon(path.join(__dirname, 'public', 'icon_violet.ico')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{

    res.redirect("/landing_page")

})


app.get('/send_wa',async (req,res)=>{

   const wa_nama = req.query.wa_nama;

    res.redirect(`https://wa.me/6281290663757/?text=Assalamualaikum Kak, Saya, ${wa_nama}, baru saja mengisi formulir di website violetstore.id. Apakah produk Spesial SARIMBIT AZZURA 2024 masih tersedia? Mohon bantuan dan informasinya, ya Kak. Terima kasih atas bantuannya😉`)
})

app.get('/landing_page', async (req, res)=> {

res.render('landing_page_dua');

})


console.log("dia berjalan");
app.listen(port,(req, res) => console.log(`berjalan di port ${port}` ));