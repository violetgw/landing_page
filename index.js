const port = 3001;
const express = require("express");
var session = require('express-session')
const app = express();
var multer  = require('multer');
const path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const mongoose  = require("mongoose");
const uri = "mongodb+srv://violetfotogwzambrud:2t62A9s0slATxgcS@cluster0.6uboakq.mongodb.net/violet";
const moment = require('moment');
require('moment-timezone');
const fs = require('fs');
moment.tz.setDefault('Asia/Jakarta');
const {data_akun,data_form_data,db_atur_img} = require('./models/schema_db');
const timestamp = Date.now();
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
  
  
  const save_data = new db_atur_img({
    img_slide:{
        img_satu:"False",
        img_satu_tulisan:{ 
            judulproduk:"False",
            deskripsi:"False"
        },
        img_dua:"False",
        img_dua_tulisan:{ 
            judulproduk:"False",
            deskripsi:"False"
        },
        img_tiga:"False",
        img_tiga_tulisan:{ 
            judulproduk:"False",
            deskripsi:"False"
        },
        img_empat:"False",
        img_empat_tulisan:{ 
            judulproduk:"False",
            deskripsi:"False"
        },
        img_lima:"False",
        img_lima_tulisan:{ 
            judulproduk:"False",
            deskripsi:"False"
        }
  
    },
    judul_dan_deskripsi_produk:{
        judul:"False",
        jenis_produk:"False",
        deskripsi_produk:"False"
    },
    filter:{
        satu:{
            nama:"False",
            get_filter:"False"
  
        },
        dua:{
            nama:"False",
            get_filter:"False"
  
        },
        tiga:{
            nama:"False",
            get_filter:"False"
  
        },
        empat:{
            nama:"False",
            get_filter:"False"
  
        },
        lima:{
            nama:"False",
            get_filter:"False"
  
        },
        enam:{
            nama:"False",
            get_filter:"False"
  
        }
    },
    all_img:{
        img_satu:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_dua:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_tiga:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_empat:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_lima:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_enam:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_tuju:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_lapan:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_sembilan:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_sepuluh:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_sebelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_duabelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_tigabelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_empatbelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_limabelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_enambelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_tujubelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_lapanbelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_sembilanbelas:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        },
        img_duapuluh:{
            img:"False",
            judulproduk:"False",
            deskripsiproduk:"False",
            filter:"False"
        }
    }
  
  });

//   save_data.save();
  
  
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
  

  // Fungsi untuk memperbarui settingan
//   async function setting_img_db(query, update) {
        
//           const result = await db_atur_img.updateOne(query, update);
//   }
  
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


  
  
  app.get("/admin", async (req,res) => {

    const db_setting = await db_atur_img.findOne({},);

    // console.log(db_setting.img_slide.img_satu);


  if(req.session.username && req.session.password){
  
    res.render("admin",{
      nama : req.session.nama,
      username : req.session.username,
      pasword: req.session.password,
      db_setting:db_setting
    });
  
  }
  else{
    res.redirect("/login");
  }
  
  });
  
  app.get("/logout",(req,res)=>{
  
  req.session.destroy();
  
  res.redirect("/login");
  
  });
  
//   setting_img_db({ username: 'Moza' }, { $set: { password: 'moza123' ,username:'moza'} });
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/gambar_landing_page');
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        
        const newFilename = `${timestamp}${extension}`;
        
        cb(null, newFilename);
    }
})
var upload = multer({ storage: storage });

                                            // slide

//untuk upload slide satu


app.post('/upload_img_slide_satu', upload.single('upload_file_satu'), async (req, res) => {
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_satu":db_setting.img_slide.img_satu}, { $set: {"img_slide.img_satu":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_satu}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test 1")
    res.redirect('/admin');
});

//untuk upload slide dua


app.post('/upload_img_slide_dua', upload.single('upload_file_dua'), async (req, res) => {
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_dua":db_setting.img_slide.img_dua}, { $set: {"img_slide.img_dua":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_dua}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test 2")

    res.redirect('/admin');
});
//untuk upload slide dua


app.post('/upload_img_slide_tiga', upload.single('upload_file_tiga'), async (req, res) => {
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_tiga":db_setting.img_slide.img_tiga}, { $set: {"img_slide.img_tiga":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_tiga}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test 3")
    res.redirect('/admin');
});

//untuk upload slide empat


app.post('/upload_img_slide_empat', upload.single('upload_file_empat'), async (req, res) => {
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_empat":db_setting.img_slide.img_empat}, { $set: {"img_slide.img_empat":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_empat}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test 4")

    res.redirect('/admin');
});


//untuk upload slide lima
app.post('/upload_img_slide_lima', upload.single('upload_file_lima'), async (req, res) => {
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_lima":db_setting.img_slide.img_lima}, { $set: {"img_slide.img_lima":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_lima}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test 5")
    res.redirect('/admin');
});


app.post('/profile-upload-multiple', upload.array('profile-files'), (req, res) => {
    res.redirect('/admin');

});
   

console.log("dia berjalan");
app.listen(port,(req, res) => console.log(`berjalan di port ${port}` ));


