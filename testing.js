const port = 3001;
const express = require("express");
var session = require('express-session')
var multer  = require('multer');
const path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const app = express();
const mongoose  = require("mongoose");
const uri = "mongodb+srv://violetfotogwzambrud:2t62A9s0slATxgcS@cluster0.6uboakq.mongodb.net/violet";
const moment = require('moment');
require('moment-timezone');
const fs = require('fs');
moment.tz.setDefault('Asia/Jakarta');
const {data_akun,data_form_data,db_atur_img} = require('./models/schema_db');

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
  
// Middleware untuk parsing data dari body permintaan POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  
  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: true }));
  
  
  app.use(favicon(path.join(__dirname, 'public', 'icon_violet.ico')));
  app.use(express.static(path.join(__dirname, 'public')));
  
  
  const save_data = new db_atur_img({
    judul_title:"False",
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
    },all_tabel:{
        tabel_satu:{
            judul:"False",
            tr_satu:{
                ukuran:"False",
                harga:"False",
            },tr_dua:{
                ukuran:"False",
                harga:"False",
            },tr_tiga:{
                ukuran:"False",
                harga:"False",
            },tr_empat:{
                ukuran:"False",
                harga:"False",
            },tr_lima:{
                ukuran:"False",
                harga:"False",
            },tr_enam:{
                ukuran:"False",
                harga:"False",
            },tr_tuju:{
                ukuran:"False",
                harga:"False",
            },tr_lapan:{
                ukuran:"False",
                harga:"False",
            },tr_sembilan:{
                ukuran:"False",
                harga:"False",
            },tr_sepuluh:{
                ukuran:"False",
                harga:"False",
            }
        },tabel_dua:{
            judul:"False",
            tr_satu:{
                ukuran:"False",
                harga:"False",
            },tr_dua:{
                ukuran:"False",
                harga:"False",
            },tr_tiga:{
                ukuran:"False",
                harga:"False",
            },tr_empat:{
                ukuran:"False",
                harga:"False",
            },tr_lima:{
                ukuran:"False",
                harga:"False",
            },tr_enam:{
                ukuran:"False",
                harga:"False",
            },tr_tuju:{
                ukuran:"False",
                harga:"False",
            },tr_lapan:{
                ukuran:"False",
                harga:"False",
            },tr_sembilan:{
                ukuran:"False",
                harga:"False",
            },tr_sepuluh:{
                ukuran:"False",
                harga:"False",
            }
        },tabel_tiga:{
            judul:"False",
            tr_satu:{
                ukuran:"False",
                harga:"False",
            },tr_dua:{
                ukuran:"False",
                harga:"False",
            },tr_tiga:{
                ukuran:"False",
                harga:"False",
            },tr_empat:{
                ukuran:"False",
                harga:"False",
            },tr_lima:{
                ukuran:"False",
                harga:"False",
            },tr_enam:{
                ukuran:"False",
                harga:"False",
            },tr_tuju:{
                ukuran:"False",
                harga:"False",
            },tr_lapan:{
                ukuran:"False",
                harga:"False",
            },tr_sembilan:{
                ukuran:"False",
                harga:"False",
            },tr_sepuluh:{
                ukuran:"False",
                harga:"False",
            }
        },tabel_empat:{
            judul:"False",
            tr_satu:{
                ukuran:"False",
                harga:"False",
            },tr_dua:{
                ukuran:"False",
                harga:"False",
            },tr_tiga:{
                ukuran:"False",
                harga:"False",
            },tr_empat:{
                ukuran:"False",
                harga:"False",
            },tr_lima:{
                ukuran:"False",
                harga:"False",
            },tr_enam:{
                ukuran:"False",
                harga:"False",
            },tr_tuju:{
                ukuran:"False",
                harga:"False",
            },tr_lapan:{
                ukuran:"False",
                harga:"False",
            },tr_sembilan:{
                ukuran:"False",
                harga:"False",
            },tr_sepuluh:{
                ukuran:"False",
                harga:"False",
            }
        }
    },link_belanja:"False",
    link_video:"False"
  
  });

//   save_data.save();
  
  
  app.get('/',(req,res)=>{
  
      res.redirect("/landing_page");
  
  });
  
  
  
  app.get('/send_wa',async (req,res)=>{
    const currentTime = moment();
    
     const judul_produk = await db_atur_img.findOne();
     const {wa_nama,nomer_telephone} = req.query;
     console.log(`Data Masuk ${wa_nama} pukul ${currentTime.format("HH:mm:ss")}`);
     console.log(judul_produk.img_slide.img_satu_tulisan.judulproduk);
     const data_short_form =  await data_form_data.findOne({nama:wa_nama, nomer_telephone:nomer_telephone},`nama nomer_telphone`);
  
     if(data_short_form){
  
      res.redirect(`https://wa.me/6281290663757/?text=Assalamu'alaikum kak saya ${wa_nama} Mau tanya mengenai" ${judul_produk.img_slide.img_satu_tulisan.judulproduk}.😉`);
  
     }
     else{
  
      const save_short_form = new data_form_data({
        nama:wa_nama,
        nomer_telephone:nomer_telephone,
        jam : currentTime.format("HH:mm:ss")
  
      });
  
      save_short_form.save();
      res.redirect(`https://wa.me/6281290663757/?text=Assalamu'alaikum kak saya ${wa_nama} Mau tanya mengenai" ${judul_produk.img_slide.img_satu_tulisan.judulproduk}.😉`);
     
    }
  
      // res.redirect(`https://wa.me/6281290663757/?text=Assalamualaikum Kak, Saya, ${wa_nama}, baru saja mengisi formulir di website violetstore.id. Apakah produk Spesial SARIMBIT AZZURA 2024 masih tersedia? Mohon bantuan dan informasinya, ya Kak. Terima kasih atas bantuannya😉`)
  });
  
  app.get('/landing_page', async (req, res)=> {
    const db_setting = await db_atur_img.findOne({},);
  
  res.render('landing_page_dua',{
  db_setting:db_setting
  });
  
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
    const db_form_data = await data_form_data.find({},"nama nomer_telephone jam");

    // console.log(db_form_data);


  if(req.session.username && req.session.password){
  
    res.render("admin",{
      nama : req.session.nama,
      username : req.session.username,
      pasword: req.session.password,
      db_setting:db_setting,
      form_data : db_form_data
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

var lastTimestamp; // Variabel global untuk menyimpan timestamp terakhir

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/gambar_landing_page');
    },
    filename: function (req, file, cb) {
        lastTimestamp = Date.now(); // Simpan timestamp terbaru
        const extension = path.extname(file.originalname);
        const newFilename = `${lastTimestamp}${extension}`;
        console.log(lastTimestamp); // Output timestamp
        cb(null, newFilename);
    }
});

var upload = multer({ storage: storage });

//untuk upload slide dua
app.post('/upload_img_slide_satu', upload.single('upload_file_satu'), async (req, res) => {
    // Gunakan timestamp terakhir yang disimpan
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({});
    await db_atur_img.updateOne({ "img_slide.img_satu": db_setting.img_slide.img_satu }, { $set: { "img_slide.img_satu": timestamp } });
    const file_path = path.join("./public/img/gambar_landing_page", `${db_setting.img_slide.img_satu}.jpg`);
    // Menghapus file
    fs.unlink(file_path, (err) => {});
    console.log("satu" + timestamp); // Output timestamp

    res.redirect('/admin');
});


//untuk upload slide dua


app.post('/upload_img_slide_dua', upload.single('upload_file_dua'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_dua":db_setting.img_slide.img_dua}, { $set: {"img_slide.img_dua":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_dua}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("dua"+timestamp);

    res.redirect('/admin');
});
//untuk upload slide dua


app.post('/upload_img_slide_tiga', upload.single('upload_file_tiga'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_tiga":db_setting.img_slide.img_tiga}, { $set: {"img_slide.img_tiga":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_tiga}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("tiga"+timestamp);

    res.redirect('/admin');
});

//untuk upload slide empat


app.post('/upload_img_slide_empat', upload.single('upload_file_empat'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_empat":db_setting.img_slide.img_empat}, { $set: {"img_slide.img_empat":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_empat}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("empat"+timestamp);

    res.redirect('/admin');
});


//untuk upload slide lima
app.post('/upload_img_slide_lima', upload.single('upload_file_lima'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "img_slide.img_lima":db_setting.img_slide.img_lima}, { $set: {"img_slide.img_lima":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.img_slide.img_lima}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("lima"+timestamp);

    res.redirect('/admin');
});

//  untuk 
app.post('/upload_all_img_satu', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_satu.img":db_setting.all_img.img_satu.img}, { $set: {"all_img.img_satu.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_satu.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img satu");
    res.redirect('/admin');
});
// card dua
app.post('/upload_all_img_dua', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_dua.img":db_setting.all_img.img_dua.img}, { $set: {"all_img.img_dua.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_dua.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img dua");
    res.redirect('/admin');
});
// card tiga
app.post('/upload_all_img_tiga', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_tiga.img":db_setting.all_img.img_tiga.img}, { $set: {"all_img.img_tiga.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_tiga.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img tiga");
    res.redirect('/admin');
});
app.post('/profile-upload-multiple', upload.array('profile-files'), (req, res) => {
    res.redirect('/admin');

});
// card empat
app.post('/upload_all_img_empat', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_empat.img":db_setting.all_img.img_empat.img}, { $set: {"all_img.img_empat.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_empat.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img empat");
    res.redirect('/admin');
});
// card lima
app.post('/upload_all_img_lima', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_lima.img":db_setting.all_img.img_lima.img}, { $set: {"all_img.img_lima.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_lima.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img lima");
    res.redirect('/admin');
});
// card enam
app.post('/upload_all_img_enam', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_enam.img":db_setting.all_img.img_enam.img}, { $set: {"all_img.img_enam.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_enam.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img enam");
    res.redirect('/admin');
});
// card tuju
app.post('/upload_all_img_tuju', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_tuju.img":db_setting.all_img.img_tuju.img}, { $set: {"all_img.img_tuju.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_tuju.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img tuju");
    res.redirect('/admin');
});
// card lapan
app.post('/upload_all_img_lapan', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_lapan.img":db_setting.all_img.img_lapan.img}, { $set: {"all_img.img_lapan.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_lapan.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img lapan");
    res.redirect('/admin');
});
// card sembilan
app.post('/upload_all_img_sembilan', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_sembilan.img":db_setting.all_img.img_sembilan.img}, { $set: {"all_img.img_sembilan.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_sembilan.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img sembilan");
    res.redirect('/admin');
});
// card sepuluh
app.post('/upload_all_img_sepuluh', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_sepuluh.img":db_setting.all_img.img_sepuluh.img}, { $set: {"all_img.img_sepuluh.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_sepuluh.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img sepuluh");
    res.redirect('/admin');
});
// card sebelas
app.post('/upload_all_img_sebelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_sebelas.img":db_setting.all_img.img_sebelas.img}, { $set: {"all_img.img_sebelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_sebelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img sebelas");
    res.redirect('/admin');
});
// card duabelas
app.post('/upload_all_img_duabelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_duabelas.img":db_setting.all_img.img_duabelas.img}, { $set: {"all_img.img_duabelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_duabelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img duabelas");
    res.redirect('/admin');
});
// card tigabelas
app.post('/upload_all_img_tigabelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_tigabelas.img":db_setting.all_img.img_tigabelas.img}, { $set: {"all_img.img_tigabelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_tigabelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img tigabelas");
    res.redirect('/admin');
});
// card empatbelas
app.post('/upload_all_img_empatbelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_empatbelas.img":db_setting.all_img.img_empatbelas.img}, { $set: {"all_img.img_empatbelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_empatbelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img empatbelas");
    res.redirect('/admin');
});
// card limabelas
app.post('/upload_all_img_limabelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_limabelas.img":db_setting.all_img.img_limabelas.img}, { $set: {"all_img.img_limabelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_limabelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img limabelas");
    res.redirect('/admin');
});
// card enambelas
app.post('/upload_all_img_enambelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_enambelas.img":db_setting.all_img.img_enambelas.img}, { $set: {"all_img.img_enambelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_enambelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img enambelas");
    res.redirect('/admin');
});
// card tujubelas
app.post('/upload_all_img_tujubelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_tujubelas.img":db_setting.all_img.img_tujubelas.img}, { $set: {"all_img.img_tujubelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_tujubelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img tujubelas");
    res.redirect('/admin');
});
// card lapanbelas
app.post('/upload_all_img_lapanbelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_lapanbelas.img":db_setting.all_img.img_lapanbelas.img}, { $set: {"all_img.img_lapanbelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_lapanbelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img lapanbelas");
    res.redirect('/admin');
});
// card sembilanbelas
app.post('/upload_all_img_sembilanbelas', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_sembilanbelas.img":db_setting.all_img.img_sembilanbelas.img}, { $set: {"all_img.img_sembilanbelas.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_sembilanbelas.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img sembilanbelas");
    res.redirect('/admin');
});
// card duapuluh
app.post('/upload_all_img_duapuluh', upload.single('upload_file'), async (req, res) => {
    const timestamp = lastTimestamp;
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({ "all_img.img_duapuluh.img":db_setting.all_img.img_duapuluh.img}, { $set: {"all_img.img_duapuluh.img":timestamp} });
    const file_path= path.join("./public/img/gambar_landing_page",`${db_setting.all_img.img_duapuluh.img}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
        console.log("test img duapuluh");
    res.redirect('/admin');
});




app.post("/edit_img_satu", async (req,res) =>{

    const {judul_slide_satu,deskripsi_slide_satu} = req.body;

    console.log(req.body.judul_slide_satu);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({ "img_slide.img_satu_tulisan.judulproduk":db_setting.img_slide.img_satu_tulisan.judulproduk,"img_slide.img_satu_tulisan.deskripsi":db_setting.img_slide.img_satu_tulisan.deskripsi}, { $set: {"img_slide.img_satu_tulisan.deskripsi":deskripsi_slide_satu,"img_slide.img_satu_tulisan.judulproduk":judul_slide_satu}});
        console.log("berhasil");
        console.log(`datanya : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});
app.post("/edit_img_dua", async (req,res) =>{

    const {judul_slide_dua,deskripsi_slide_dua} = req.body;

    console.log(req.body.judul_slide_dua);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({ "img_slide.img_dua_tulisan.judulproduk":db_setting.img_slide.img_dua_tulisan.judulproduk,"img_slide.img_dua_tulisan.deskripsi":db_setting.img_slide.img_dua_tulisan.deskripsi}, { $set: {"img_slide.img_dua_tulisan.deskripsi":deskripsi_slide_dua,"img_slide.img_dua_tulisan.judulproduk":judul_slide_dua}});
        console.log("berhasil");
        console.log(`sadassadss : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});
app.post("/edit_img_tiga", async (req,res) =>{

    const {judul_slide_tiga,deskripsi_slide_tiga} = req.body;

    console.log(req.body.judul_slide_tiga);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({ "img_slide.img_tiga_tulisan.judulproduk":db_setting.img_slide.img_tiga_tulisan.judulproduk,"img_slide.img_tiga_tulisan.deskripsi":db_setting.img_slide.img_tiga_tulisan.deskripsi}, { $set: {"img_slide.img_tiga_tulisan.deskripsi":deskripsi_slide_tiga,"img_slide.img_tiga_tulisan.judulproduk":judul_slide_tiga}});
        console.log("berhasil");
        console.log(`sadassadss : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});
app.post("/edit_img_empat", async (req,res) =>{

    const {judul_slide_empat,deskripsi_slide_empat} = req.body;

    console.log(req.body.judul_slide_empat);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({ "img_slide.img_empat_tulisan.judulproduk":db_setting.img_slide.img_empat_tulisan.judulproduk,"img_slide.img_empat_tulisan.deskripsi":db_setting.img_slide.img_empat_tulisan.deskripsi}, { $set: {"img_slide.img_empat_tulisan.deskripsi":deskripsi_slide_empat,"img_slide.img_empat_tulisan.judulproduk":judul_slide_empat}});
        console.log("berhasil");
        console.log(`sadassadss : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});
app.post("/edit_img_lima", async (req,res) =>{

    const {judul_slide_lima,deskripsi_slide_lima} = req.body;

    console.log(req.body.judul_slide_lima);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({ "img_slide.img_lima_tulisan.judulproduk":db_setting.img_slide.img_lima_tulisan.judulproduk,"img_slide.img_lima_tulisan.deskripsi":db_setting.img_slide.img_lima_tulisan.deskripsi}, { $set: {"img_slide.img_lima_tulisan.deskripsi":deskripsi_slide_lima,"img_slide.img_lima_tulisan.judulproduk":judul_slide_lima}});
        console.log("berhasil");
        console.log(`sadassadss : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});

app.post("/edit_judul_dan_deskripsi_produk", async (req,res) =>{

    const {judul,jenis_produk,deskripsi_produk} = req.body;

    console.log(req.body.judul_slide_dua);
    
    try{
        const db_setting = await db_atur_img.findOne({},);
        const db = await db_atur_img.updateOne({
        "judul_dan_deskripsi_produk.judul":db_setting.judul_dan_deskripsi_produk.judul,
        "judul_dan_deskripsi_produk.jenis_produk":db_setting.judul_dan_deskripsi_produk.jenis_produk,
        "judul_dan_deskripsi_produk.deskripsi_produk":db_setting.judul_dan_deskripsi_produk.deskripsi_produk},
        {$set: {
        "judul_dan_deskripsi_produk.judul":judul,
        "judul_dan_deskripsi_produk.jenis_produk":jenis_produk,
        "judul_dan_deskripsi_produk.deskripsi_produk":deskripsi_produk
        }});
        console.log("berhasil");
        console.log(`datanya : ${req.body}`);
        res.redirect('/admin'); 
    }catch{
        console.log("eror");
        res.redirect("/admin")
    }

});


// card untuk hapus
app.post('/hapus_gambar_all_card', async (req, res) => {
    const {img_card_all} =  req.body;
    console.log(img_card_all);              
    const db_setting = await db_atur_img.findOne({},);

    // fungsi mengahpus di multer 
    async function hapus_img_multer(nama_path){
        const file_path= path.join("./public/img/gambar_landing_page",`${nama_path}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
    }


    if(img_card_all == "False img 1"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_satu.img);
        await db_atur_img.updateOne({ "all_img.img_satu.img":db_setting.all_img.img_satu.img}, { $set: {"all_img.img_satu.img":"False"} });

     }
    else  if(img_card_all == "False img 2"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_dua.img);
        await db_atur_img.updateOne({ "all_img.img_dua.img":db_setting.all_img.img_dua.img}, { $set: {"all_img.img_dua.img":"False"} });
    }
    else  if(img_card_all == "False img 3"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_tiga.img);
        await db_atur_img.updateOne({ "all_img.img_tiga.img":db_setting.all_img.img_tiga.img}, { $set: {"all_img.img_tiga.img":"False"} });
    }
    else  if(img_card_all == "False img 4"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_empat.img);
        await db_atur_img.updateOne({ "all_img.img_empat.img":db_setting.all_img.img_empat.img}, { $set: {"all_img.img_empat.img":"False"} });
     }
    else  if(img_card_all == "False img 5"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_lima.img);
        await db_atur_img.updateOne({ "all_img.img_lima.img":db_setting.all_img.img_lima.img}, { $set: {"all_img.img_lima.img":"False"} });

     }
    else  if(img_card_all == "False img 6"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_enam.img);
        await db_atur_img.updateOne({ "all_img.img_enam.img":db_setting.all_img.img_enam.img}, { $set: {"all_img.img_enam.img":"False"} });

     }
    else  if(img_card_all == "False img 7"){
         console.log(`data sama dapat di dalate`);
         hapus_img_multer(db_setting.all_img.img_tuju.img);
         await db_atur_img.updateOne({ "all_img.img_tuju.img":db_setting.all_img.img_tuju.img}, { $set: {"all_img.img_tuju.img":"False"} });
 
    }
    else  if(img_card_all == "False img 8"){
          console.log(`data sama dapat di dalate`);
          hapus_img_multer(db_setting.all_img.img_lapan.img);
          await db_atur_img.updateOne({ "all_img.img_lapan.img":db_setting.all_img.img_lapan.img}, { $set: {"all_img.img_lapan.img":"False"} });
  
    }
    else  if(img_card_all == "False img 9"){
           console.log(`data sama dapat di dalate`);
           hapus_img_multer(db_setting.all_img.img_sembilan.img);
           await db_atur_img.updateOne({ "all_img.img_sembilan.img":db_setting.all_img.img_sembilan.img}, { $set: {"all_img.img_sembilan.img":"False"} });
   
    }
    else  if(img_card_all == "False img 10"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_sepuluh.img);
        await db_atur_img.updateOne({ "all_img.img_sepuluh.img":db_setting.all_img.img_sepuluh.img}, { $set: {"all_img.img_sepuluh.img":"False"} });

     }
    else if(img_card_all == "False img 11"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_sebelas.img);
        await db_atur_img.updateOne({ "all_img.img_sebelas.img":db_setting.all_img.img_sebelas.img}, { $set: {"all_img.img_sebelas.img":"False"} });

     }
    else  if(img_card_all == "False img 12"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_duabelas.img);
        await db_atur_img.updateOne({ "all_img.img_duabelas.img":db_setting.all_img.img_duabelas.img}, { $set: {"all_img.img_duabelas.img":"False"} });
    }
    else  if(img_card_all == "False img 13"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_tigabelas.img);
        await db_atur_img.updateOne({ "all_img.img_tigabelas.img":db_setting.all_img.img_tigabelas.img}, { $set: {"all_img.img_tigabelas.img":"False"} });
    }
    else  if(img_card_all == "False img 14"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_empatbelas.img);
        await db_atur_img.updateOne({ "all_img.img_empatbelas.img":db_setting.all_img.img_empatbelas.img}, { $set: {"all_img.img_empatbelas.img":"False"} });
     }
    else  if(img_card_all == "False img 15"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_limabelas.img);
        await db_atur_img.updateOne({ "all_img.img_limabelas.img":db_setting.all_img.img_limabelas.img}, { $set: {"all_img.img_limabelas.img":"False"} });

     }
    else  if(img_card_all == "False img 16"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_enambelas.img);
        await db_atur_img.updateOne({ "all_img.img_enambelas.img":db_setting.all_img.img_enambelas.img}, { $set: {"all_img.img_enambelas.img":"False"} });

     }
    else  if(img_card_all == "False img 17"){
         console.log(`data sama dapat di dalate`);
         hapus_img_multer(db_setting.all_img.img_tujubelas.img);
         await db_atur_img.updateOne({ "all_img.img_tujubelas.img":db_setting.all_img.img_tujubelas.img}, { $set: {"all_img.img_tujubelas.img":"False"} });
 
    }
    else  if(img_card_all == "False img 18"){
          console.log(`data sama dapat di dalate`);
          hapus_img_multer(db_setting.all_img.img_lapanbelas.img);
          await db_atur_img.updateOne({ "all_img.img_lapanbelas.img":db_setting.all_img.img_lapanbelas.img}, { $set: {"all_img.img_lapanbelas.img":"False"} });
  
    }
    else  if(img_card_all == "False img 19"){
           console.log(`data sama dapat di dalate`);
           hapus_img_multer(db_setting.all_img.img_sembilanbelas.img);
           await db_atur_img.updateOne({ "all_img.img_sembilanbelas.img":db_setting.all_img.img_sembilanbelas.img}, { $set: {"all_img.img_sembilanbelas.img":"False"} });
   
    }
    else  if(img_card_all == "False img 20"){
        console.log(`data sama dapat di dalate`);
        hapus_img_multer(db_setting.all_img.img_duapuluh.img);
        await db_atur_img.updateOne({ "all_img.img_duapuluh.img":db_setting.all_img.img_duapuluh.img}, { $set: {"all_img.img_duapuluh.img":"False"} });

     }
     else {
        console.log(`data tidak sama dan tidak dapat di dalate`);
    }
    res.redirect('/admin');
});
app.post('/hapus_gambar_all_slide', async (req, res) => {
    const {img_slide_all} =  req.body;
    console.log(img_slide_all);              
    const db_setting = await db_atur_img.findOne({},);

    // fungsi mengahpus di multer 
    async function hapus_img_multer(nama_path){
        console.log(nama_path);
        const file_path= path.join("./public/img/gambar_landing_page",`${nama_path}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
    }


    if(img_slide_all == "False slide img 1"){

        hapus_img_multer(db_setting.img_slide.img_satu);
        await db_atur_img.updateOne({ "img_slide.img_satu":db_setting.img_slide.img_satu}, { $set: {"img_slide.img_satu":"False"} });

     }
    else  if(img_slide_all == "False slide img 2"){

        hapus_img_multer(db_setting.img_slide.img_dua);
        await db_atur_img.updateOne({ "img_slide.img_dua":db_setting.img_slide.img_dua}, { $set: {"img_slide.img_dua":"False"} });
    }
    else  if(img_slide_all == "False slide img 3"){

        hapus_img_multer(db_setting.img_slide.img_tiga);
        await db_atur_img.updateOne({ "img_slide.img_tiga":db_setting.img_slide.img_tiga}, { $set: {"img_slide.img_tiga":"False"} });
    }
    else  if(img_slide_all == "False slide img 4"){

        hapus_img_multer(db_setting.img_slide.img_empat);
        await db_atur_img.updateOne({ "img_slide.img_empat":db_setting.img_slide.img_empat}, { $set: {"img_slide.img_empat":"False"} });
     }
    else  if(img_slide_all == "False slide img 5"){

        hapus_img_multer(db_setting.img_slide.img_lima);
        await db_atur_img.updateOne({ "img_slide.img_lima":db_setting.img_slide.img_lima}, { $set: {"img_slide.img_lima":"False"} });
    }else {
        console.log(`data tidak sama dan tidak dapat di dalate`);
    }
    res.redirect('/admin');
});

app.post('/edit_filter', async (req, res) => {
    const {
        nama_filter_satu,
        nama_filter_dua,
        nama_filter_tiga,
        nama_filter_empat,
        nama_filter_lima,
        nama_filter_enam,
        get_filter_satu,
        get_filter_dua,
        get_filter_tiga,
        get_filter_empat,
        get_filter_lima,
        get_filter_enam
        } =  req.body;

          
    const db_setting = await db_atur_img.findOne({},);

    // fungsi mengahpus di multer 
    async function hapus_img_multer(nama_path){
        console.log(nama_path);
        const file_path= path.join("./public/img/gambar_landing_page",`${nama_path}.jpg`);
        // Menghapus file
        fs.unlink(file_path, (err) => {});
    }


    if(nama_filter_satu && get_filter_satu){

        hapus_img_multer(db_setting.filter.satu.nama);
        await db_atur_img.updateOne({ "filter.satu.nama":db_setting.filter.satu.nama,"filter.satu.get_filter":db_setting.filter.satu.get_filter}, { $set: {"filter.satu.nama":nama_filter_satu,"filter.satu.get_filter":get_filter_satu} });

     }else if(nama_filter_dua && get_filter_dua){

        hapus_img_multer(db_setting.filter.dua.nama);
        await db_atur_img.updateOne({ "filter.dua.nama":db_setting.filter.dua.nama,"filter.dua.get_filter":db_setting.filter.dua.get_filter}, { $set: {"filter.dua.nama":nama_filter_dua,"filter.dua.get_filter":get_filter_dua} });

     }else if(nama_filter_tiga && get_filter_tiga){

        hapus_img_multer(db_setting.filter.tiga.nama);
        await db_atur_img.updateOne({ "filter.tiga.nama":db_setting.filter.tiga.nama,"filter.tiga.get_filter":db_setting.filter.tiga.get_filter}, { $set: {"filter.tiga.nama":nama_filter_tiga,"filter.tiga.get_filter":get_filter_tiga} });

     }else if(nama_filter_empat && get_filter_empat){

        hapus_img_multer(db_setting.filter.empat.nama);
        await db_atur_img.updateOne({ "filter.empat.nama":db_setting.filter.empat.nama,"filter.empat.get_filter":db_setting.filter.empat.get_filter}, { $set: {"filter.empat.nama":nama_filter_empat,"filter.empat.get_filter":get_filter_empat} });

     }else if(nama_filter_lima && get_filter_lima){

        hapus_img_multer(db_setting.filter.lima.nama);
        await db_atur_img.updateOne({ "filter.lima.nama":db_setting.filter.lima.nama,"filter.lima.get_filter":db_setting.filter.lima.get_filter}, { $set: {"filter.lima.nama":nama_filter_lima,"filter.lima.get_filter":get_filter_lima} });
     
    }else if(nama_filter_enam && get_filter_enam){

        hapus_img_multer(db_setting.filter.enam.nama);
        await db_atur_img.updateOne({ "filter.enam.nama":db_setting.filter.enam.nama,"filter.enam.get_filter":db_setting.filter.enam.get_filter}, { $set: {"filter.enam.nama":nama_filter_enam,"filter.enam.get_filter":get_filter_enam} });

     }else {
        console.log(`data tidak sama dan tidak dapat di dalate`);
    }
    res.redirect('/admin');
});

app.post('/edit_all_img', async (req, res) => {
    const {
        judul_img_card_satu,
        judul_img_card_dua,
        judul_img_card_tiga,
        judul_img_card_empat,
        judul_img_card_lima,
        judul_img_card_enam,
        judul_img_card_tuju,
        judul_img_card_lapan,
        judul_img_card_sembilan,
        judul_img_card_sepuluh,
        judul_img_card_sebelas,
        judul_img_card_duabelas,
        judul_img_card_tigabelas,
        judul_img_card_empatbelas,
        judul_img_card_limabelas,
        judul_img_card_enambelas,
        judul_img_card_tujubelas,
        judul_img_card_lapanbelas,
        judul_img_card_sembilanbelas,
        judul_img_card_duapuluh,
        deskripsi_img_card_satu,
        deskripsi_img_card_dua,
        deskripsi_img_card_tiga,
        deskripsi_img_card_empat,
        deskripsi_img_card_lima,
        deskripsi_img_card_enam,
        deskripsi_img_card_tuju,
        deskripsi_img_card_lapan,
        deskripsi_img_card_sembilan,
        deskripsi_img_card_sepuluh,
        deskripsi_img_card_sebelas,
        deskripsi_img_card_duabelas,
        deskripsi_img_card_tigabelas,
        deskripsi_img_card_empatbelas,
        deskripsi_img_card_limabelas,
        deskripsi_img_card_enambelas,
        deskripsi_img_card_tujubelas,
        deskripsi_img_card_lapanbelas,
        deskripsi_img_card_sembilanbelas,
        deskripsi_img_card_duapuluh,
        filter_img_card_satu,
        filter_img_card_dua,
        filter_img_card_tiga,
        filter_img_card_empat,
        filter_img_card_lima,
        filter_img_card_enam,
        filter_img_card_tuju,
        filter_img_card_lapan,
        filter_img_card_sembilan,
        filter_img_card_sepuluh,
        filter_img_card_sebelas,
        filter_img_card_duabelas,
        filter_img_card_tigabelas,
        filter_img_card_empatbelas,
        filter_img_card_limabelas,
        filter_img_card_enambelas,
        filter_img_card_tujubelas,
        filter_img_card_lapanbelas,
        filter_img_card_sembilanbelas,
        filter_img_card_duapuluh,
        } =  req.body;

    
    if(judul_img_card_satu && deskripsi_img_card_satu && filter_img_card_satu){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_satu.judulproduk":db_setting.all_img.img_satu.judulproduk,
        "all_img.img_satu.deskripsiproduk":db_setting.all_img.img_satu.deskripsiproduk,
        "all_img.img_satu.filter":db_setting.all_img.img_satu.filter},
        { $set: {"all_img.img_satu.judulproduk":judul_img_card_satu,
        "all_img.img_satu.deskripsiproduk":deskripsi_img_card_satu,
        "all_img.img_satu.filter":filter_img_card_satu} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_dua && deskripsi_img_card_dua && filter_img_card_dua){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_dua.judulproduk":db_setting.all_img.img_dua.judulproduk,
        "all_img.img_dua.deskripsiproduk":db_setting.all_img.img_dua.deskripsiproduk,
        "all_img.img_dua.filter":db_setting.all_img.img_dua.filter},
        { $set: {"all_img.img_dua.judulproduk":judul_img_card_dua,
        "all_img.img_dua.deskripsiproduk":deskripsi_img_card_dua,
        "all_img.img_dua.filter":filter_img_card_dua} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_tiga && deskripsi_img_card_tiga && filter_img_card_tiga){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_tiga.judulproduk":db_setting.all_img.img_tiga.judulproduk,
        "all_img.img_tiga.deskripsiproduk":db_setting.all_img.img_tiga.deskripsiproduk,
        "all_img.img_tiga.filter":db_setting.all_img.img_tiga.filter},
        { $set: {"all_img.img_tiga.judulproduk":judul_img_card_tiga,
        "all_img.img_tiga.deskripsiproduk":deskripsi_img_card_tiga,
        "all_img.img_tiga.filter":filter_img_card_tiga} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_empat && deskripsi_img_card_empat && filter_img_card_empat){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_empat.judulproduk":db_setting.all_img.img_empat.judulproduk,
        "all_img.img_empat.deskripsiproduk":db_setting.all_img.img_empat.deskripsiproduk,
        "all_img.img_empat.filter":db_setting.all_img.img_empat.filter},
        { $set: {"all_img.img_empat.judulproduk":judul_img_card_empat,
        "all_img.img_empat.deskripsiproduk":deskripsi_img_card_empat,
        "all_img.img_empat.filter":filter_img_card_empat} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_lima && deskripsi_img_card_lima && filter_img_card_lima){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_lima.judulproduk":db_setting.all_img.img_lima.judulproduk,
        "all_img.img_lima.deskripsiproduk":db_setting.all_img.img_lima.deskripsiproduk,
        "all_img.img_lima.filter":db_setting.all_img.img_lima.filter},
        { $set: {"all_img.img_lima.judulproduk":judul_img_card_lima,
        "all_img.img_lima.deskripsiproduk":deskripsi_img_card_lima,
        "all_img.img_lima.filter":filter_img_card_lima} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_enam && deskripsi_img_card_enam && filter_img_card_enam){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_enam.judulproduk":db_setting.all_img.img_enam.judulproduk,
        "all_img.img_enam.deskripsiproduk":db_setting.all_img.img_enam.deskripsiproduk,
        "all_img.img_enam.filter":db_setting.all_img.img_enam.filter},
        { $set: {"all_img.img_enam.judulproduk":judul_img_card_enam,
        "all_img.img_enam.deskripsiproduk":deskripsi_img_card_enam,
        "all_img.img_enam.filter":filter_img_card_enam} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_tuju && deskripsi_img_card_tuju && filter_img_card_tuju){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_tuju.judulproduk":db_setting.all_img.img_tuju.judulproduk,
        "all_img.img_tuju.deskripsiproduk":db_setting.all_img.img_tuju.deskripsiproduk,
        "all_img.img_tuju.filter":db_setting.all_img.img_tuju.filter},
        { $set: {"all_img.img_tuju.judulproduk":judul_img_card_tuju,
        "all_img.img_tuju.deskripsiproduk":deskripsi_img_card_tuju,
        "all_img.img_tuju.filter":filter_img_card_tuju} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_lapan && deskripsi_img_card_lapan && filter_img_card_lapan){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_lapan.judulproduk":db_setting.all_img.img_lapan.judulproduk,
        "all_img.img_lapan.deskripsiproduk":db_setting.all_img.img_lapan.deskripsiproduk,
        "all_img.img_lapan.filter":db_setting.all_img.img_lapan.filter},
        { $set: {"all_img.img_lapan.judulproduk":judul_img_card_lapan,
        "all_img.img_lapan.deskripsiproduk":deskripsi_img_card_lapan,
        "all_img.img_lapan.filter":filter_img_card_lapan} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_sembilan && deskripsi_img_card_sembilan && filter_img_card_sembilan){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_sembilan.judulproduk":db_setting.all_img.img_sembilan.judulproduk,
        "all_img.img_sembilan.deskripsiproduk":db_setting.all_img.img_sembilan.deskripsiproduk,
        "all_img.img_sembilan.filter":db_setting.all_img.img_sembilan.filter},
        { $set: {"all_img.img_sembilan.judulproduk":judul_img_card_sembilan,
        "all_img.img_sembilan.deskripsiproduk":deskripsi_img_card_sembilan,
        "all_img.img_sembilan.filter":filter_img_card_sembilan} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_sepuluh && deskripsi_img_card_sepuluh && filter_img_card_sepuluh){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_sepuluh.judulproduk":db_setting.all_img.img_sepuluh.judulproduk,
        "all_img.img_sepuluh.deskripsiproduk":db_setting.all_img.img_sepuluh.deskripsiproduk,
        "all_img.img_sepuluh.filter":db_setting.all_img.img_sepuluh.filter},
        { $set: {"all_img.img_sepuluh.judulproduk":judul_img_card_sepuluh,
        "all_img.img_sepuluh.deskripsiproduk":deskripsi_img_card_sepuluh,
        "all_img.img_sepuluh.filter":filter_img_card_sepuluh} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_sebelas && deskripsi_img_card_sebelas && filter_img_card_sebelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_sebelas.judulproduk":db_setting.all_img.img_sebelas.judulproduk,
        "all_img.img_sebelas.deskripsiproduk":db_setting.all_img.img_sebelas.deskripsiproduk,
        "all_img.img_sebelas.filter":db_setting.all_img.img_sebelas.filter},
        { $set: {"all_img.img_sebelas.judulproduk":judul_img_card_sebelas,
        "all_img.img_sebelas.deskripsiproduk":deskripsi_img_card_sebelas,
        "all_img.img_sebelas.filter":filter_img_card_sebelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_duabelas && deskripsi_img_card_duabelas && filter_img_card_duabelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_duabelas.judulproduk":db_setting.all_img.img_duabelas.judulproduk,
        "all_img.img_duabelas.deskripsiproduk":db_setting.all_img.img_duabelas.deskripsiproduk,
        "all_img.img_duabelas.filter":db_setting.all_img.img_duabelas.filter},
        { $set: {"all_img.img_duabelas.judulproduk":judul_img_card_duabelas,
        "all_img.img_duabelas.deskripsiproduk":deskripsi_img_card_duabelas,
        "all_img.img_duabelas.filter":filter_img_card_duabelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_tigabelas && deskripsi_img_card_tigabelas && filter_img_card_tigabelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_tigabelas.judulproduk":db_setting.all_img.img_tigabelas.judulproduk,
        "all_img.img_tigabelas.deskripsiproduk":db_setting.all_img.img_tigabelas.deskripsiproduk,
        "all_img.img_tigabelas.filter":db_setting.all_img.img_tigabelas.filter},
        { $set: {"all_img.img_tigabelas.judulproduk":judul_img_card_tigabelas,
        "all_img.img_tigabelas.deskripsiproduk":deskripsi_img_card_tigabelas,
        "all_img.img_tigabelas.filter":filter_img_card_tigabelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_empatbelas && deskripsi_img_card_empatbelas && filter_img_card_empatbelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_empatbelas.judulproduk":db_setting.all_img.img_empatbelas.judulproduk,
        "all_img.img_empatbelas.deskripsiproduk":db_setting.all_img.img_empatbelas.deskripsiproduk,
        "all_img.img_empatbelas.filter":db_setting.all_img.img_empatbelas.filter},
        { $set: {"all_img.img_empatbelas.judulproduk":judul_img_card_empatbelas,
        "all_img.img_empatbelas.deskripsiproduk":deskripsi_img_card_empatbelas,
        "all_img.img_empatbelas.filter":filter_img_card_empatbelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_limabelas && deskripsi_img_card_limabelas && filter_img_card_limabelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_limabelas.judulproduk":db_setting.all_img.img_limabelas.judulproduk,
        "all_img.img_limabelas.deskripsiproduk":db_setting.all_img.img_limabelas.deskripsiproduk,
        "all_img.img_limabelas.filter":db_setting.all_img.img_limabelas.filter},
        { $set: {"all_img.img_limabelas.judulproduk":judul_img_card_limabelas,
        "all_img.img_limabelas.deskripsiproduk":deskripsi_img_card_limabelas,
        "all_img.img_limabelas.filter":filter_img_card_limabelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_enambelas && deskripsi_img_card_enambelas && filter_img_card_enambelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_enambelas.judulproduk":db_setting.all_img.img_enambelas.judulproduk,
        "all_img.img_enambelas.deskripsiproduk":db_setting.all_img.img_enambelas.deskripsiproduk,
        "all_img.img_enambelas.filter":db_setting.all_img.img_enambelas.filter},
        { $set: {"all_img.img_enambelas.judulproduk":judul_img_card_enambelas,
        "all_img.img_enambelas.deskripsiproduk":deskripsi_img_card_enambelas,
        "all_img.img_enambelas.filter":filter_img_card_enambelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_tujubelas && deskripsi_img_card_tujubelas && filter_img_card_tujubelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_tujubelas.judulproduk":db_setting.all_img.img_tujubelas.judulproduk,
        "all_img.img_tujubelas.deskripsiproduk":db_setting.all_img.img_tujubelas.deskripsiproduk,
        "all_img.img_tujubelas.filter":db_setting.all_img.img_tujubelas.filter},
        { $set: {"all_img.img_tujubelas.judulproduk":judul_img_card_tujubelas,
        "all_img.img_tujubelas.deskripsiproduk":deskripsi_img_card_tujubelas,
        "all_img.img_tujubelas.filter":filter_img_card_tujubelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_lapanbelas && deskripsi_img_card_lapanbelas && filter_img_card_lapanbelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_lapanbelas.judulproduk":db_setting.all_img.img_lapanbelas.judulproduk,
        "all_img.img_lapanbelas.deskripsiproduk":db_setting.all_img.img_lapanbelas.deskripsiproduk,
        "all_img.img_lapanbelas.filter":db_setting.all_img.img_lapanbelas.filter},
        { $set: {"all_img.img_lapanbelas.judulproduk":judul_img_card_lapanbelas,
        "all_img.img_lapanbelas.deskripsiproduk":deskripsi_img_card_lapanbelas,
        "all_img.img_lapanbelas.filter":filter_img_card_lapanbelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_sembilanbelas && deskripsi_img_card_sembilanbelas && filter_img_card_sembilanbelas){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_sembilanbelas.judulproduk":db_setting.all_img.img_sembilanbelas.judulproduk,
        "all_img.img_sembilanbelas.deskripsiproduk":db_setting.all_img.img_sembilanbelas.deskripsiproduk,
        "all_img.img_sembilanbelas.filter":db_setting.all_img.img_sembilanbelas.filter},
        { $set: {"all_img.img_sembilanbelas.judulproduk":judul_img_card_sembilanbelas,
        "all_img.img_sembilanbelas.deskripsiproduk":deskripsi_img_card_sembilanbelas,
        "all_img.img_sembilanbelas.filter":filter_img_card_sembilanbelas} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else if(judul_img_card_duapuluh && deskripsi_img_card_duapuluh && filter_img_card_duapuluh){
        const db_setting = await db_atur_img.findOne({},);
        await db_atur_img.updateOne({ "all_img.img_duapuluh.judulproduk":db_setting.all_img.img_duapuluh.judulproduk,
        "all_img.img_duapuluh.deskripsiproduk":db_setting.all_img.img_duapuluh.deskripsiproduk,
        "all_img.img_duapuluh.filter":db_setting.all_img.img_duapuluh.filter},
        { $set: {"all_img.img_duapuluh.judulproduk":judul_img_card_duapuluh,
        "all_img.img_duapuluh.deskripsiproduk":deskripsi_img_card_duapuluh,
        "all_img.img_duapuluh.filter":filter_img_card_duapuluh} });        
        console.log(`all img berhasil`);
        res.redirect('/admin');
    }else{
        console.log(`all img gagal`);
        res.redirect('/admin');
    }
    
});

// unutk simpan atau edit ukuran dan harga table
app.post('/simpan_harga_ukuran_table',async (req,res)=>{

    if(req.session.username && req.session.password){
const{
    judul_tabel_satu,
    judul_tabel_dua,
    judul_tabel_tiga,
    judul_tabel_empat,
    tabel_satu_tr_ukuran_satu,
    tabel_satu_tr_ukuran_dua,
    tabel_satu_tr_ukuran_tiga,
    tabel_satu_tr_ukuran_empat,
    tabel_satu_tr_ukuran_lima,
    tabel_satu_tr_ukuran_enam,
    tabel_satu_tr_ukuran_tuju,
    tabel_satu_tr_ukuran_lapan,
    tabel_satu_tr_ukuran_sembilan,
    tabel_satu_tr_ukuran_sepuluh,
    tabel_satu_tr_harga_satu,
    tabel_satu_tr_harga_dua,
    tabel_satu_tr_harga_tiga,
    tabel_satu_tr_harga_empat,
    tabel_satu_tr_harga_lima,
    tabel_satu_tr_harga_enam,
    tabel_satu_tr_harga_tuju,
    tabel_satu_tr_harga_lapan,
    tabel_satu_tr_harga_sembilan,
    tabel_satu_tr_harga_sepuluh,
    tabel_dua_tr_ukuran_satu,
    tabel_dua_tr_ukuran_dua,
    tabel_dua_tr_ukuran_tiga,
    tabel_dua_tr_ukuran_empat,
    tabel_dua_tr_ukuran_lima,
    tabel_dua_tr_ukuran_enam,
    tabel_dua_tr_ukuran_tuju,
    tabel_dua_tr_ukuran_lapan,
    tabel_dua_tr_ukuran_sembilan,
    tabel_dua_tr_ukuran_sepuluh,
    tabel_dua_tr_harga_satu,
    tabel_dua_tr_harga_dua,
    tabel_dua_tr_harga_tiga,
    tabel_dua_tr_harga_empat,
    tabel_dua_tr_harga_lima,
    tabel_dua_tr_harga_enam,
    tabel_dua_tr_harga_tuju,
    tabel_dua_tr_harga_lapan,
    tabel_dua_tr_harga_sembilan,
    tabel_dua_tr_harga_sepuluh,
    tabel_tiga_tr_ukuran_satu,
    tabel_tiga_tr_ukuran_dua,
    tabel_tiga_tr_ukuran_tiga,
    tabel_tiga_tr_ukuran_empat,
    tabel_tiga_tr_ukuran_lima,
    tabel_tiga_tr_ukuran_enam,
    tabel_tiga_tr_ukuran_tuju,
    tabel_tiga_tr_ukuran_lapan,
    tabel_tiga_tr_ukuran_sembilan,
    tabel_tiga_tr_ukuran_sepuluh,
    tabel_tiga_tr_harga_satu,
    tabel_tiga_tr_harga_dua,
    tabel_tiga_tr_harga_tiga,
    tabel_tiga_tr_harga_empat,
    tabel_tiga_tr_harga_lima,
    tabel_tiga_tr_harga_enam,
    tabel_tiga_tr_harga_tuju,
    tabel_tiga_tr_harga_lapan,
    tabel_tiga_tr_harga_sembilan,
    tabel_tiga_tr_harga_sepuluh,
    tabel_empat_tr_ukuran_satu,
    tabel_empat_tr_ukuran_dua,
    tabel_empat_tr_ukuran_tiga,
    tabel_empat_tr_ukuran_empat,
    tabel_empat_tr_ukuran_lima,
    tabel_empat_tr_ukuran_enam,
    tabel_empat_tr_ukuran_tuju,
    tabel_empat_tr_ukuran_lapan,
    tabel_empat_tr_ukuran_sembilan,
    tabel_empat_tr_ukuran_sepuluh,
    tabel_empat_tr_harga_satu,
    tabel_empat_tr_harga_dua,
    tabel_empat_tr_harga_tiga,
    tabel_empat_tr_harga_empat,
    tabel_empat_tr_harga_lima,
    tabel_empat_tr_harga_enam,
    tabel_empat_tr_harga_tuju,
    tabel_empat_tr_harga_lapan,
    tabel_empat_tr_harga_sembilan,
    tabel_empat_tr_harga_sepuluh
} = req.body;


if(judul_tabel_satu){
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({
    "all_tabel.tabel_satu.judul":db_setting.all_tabel.tabel_satu.judul,
    "all_tabel.tabel_satu.tr_satu.ukuran":db_setting.all_tabel.tabel_satu.tr_satu.ukuran,
    "all_tabel.tabel_satu.tr_satu.harga":db_setting.all_tabel.tabel_satu.tr_satu.harga
    },
    { $set: {
    "all_tabel.tabel_satu.judul":judul_tabel_satu,
    "all_tabel.tabel_satu.tr_satu.ukuran":tabel_satu_tr_ukuran_satu,
    "all_tabel.tabel_satu.tr_satu.harga":tabel_satu_tr_harga_satu,
    "all_tabel.tabel_satu.tr_dua.ukuran":tabel_satu_tr_ukuran_dua,
    "all_tabel.tabel_satu.tr_dua.harga":tabel_satu_tr_harga_dua,
    "all_tabel.tabel_satu.tr_tiga.ukuran":tabel_satu_tr_ukuran_tiga,
    "all_tabel.tabel_satu.tr_tiga.harga":tabel_satu_tr_harga_tiga,
    "all_tabel.tabel_satu.tr_empat.ukuran":tabel_satu_tr_ukuran_empat,
    "all_tabel.tabel_satu.tr_empat.harga":tabel_satu_tr_harga_empat,
    "all_tabel.tabel_satu.tr_lima.ukuran":tabel_satu_tr_ukuran_lima,
    "all_tabel.tabel_satu.tr_lima.harga":tabel_satu_tr_harga_lima,
    "all_tabel.tabel_satu.tr_enam.ukuran":tabel_satu_tr_ukuran_enam,
    "all_tabel.tabel_satu.tr_enam.harga":tabel_satu_tr_harga_enam,
    "all_tabel.tabel_satu.tr_tuju.ukuran":tabel_satu_tr_ukuran_tuju,
    "all_tabel.tabel_satu.tr_tuju.harga":tabel_satu_tr_harga_tuju,
    "all_tabel.tabel_satu.tr_lapan.ukuran":tabel_satu_tr_ukuran_lapan,
    "all_tabel.tabel_satu.tr_lapan.harga":tabel_satu_tr_harga_lapan,
    "all_tabel.tabel_satu.tr_sembilan.ukuran":tabel_satu_tr_ukuran_sembilan,
    "all_tabel.tabel_satu.tr_sembilan.harga":tabel_satu_tr_harga_sembilan,
    "all_tabel.tabel_satu.tr_sepuluh.ukuran":tabel_satu_tr_ukuran_sepuluh,
    "all_tabel.tabel_satu.tr_sepuluh.harga":tabel_satu_tr_harga_sepuluh,
    } });        
    console.log(`all table berhasil`);
    res.redirect('/admin');
}else if(judul_tabel_dua){
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({
    "all_tabel.tabel_dua.judul":db_setting.all_tabel.tabel_dua.judul,
    "all_tabel.tabel_dua.tr_satu.ukuran":db_setting.all_tabel.tabel_dua.tr_satu.ukuran,
    "all_tabel.tabel_dua.tr_satu.harga":db_setting.all_tabel.tabel_dua.tr_satu.harga
    },
    { $set: {
    "all_tabel.tabel_dua.judul":judul_tabel_dua,
    "all_tabel.tabel_dua.tr_satu.ukuran":tabel_dua_tr_ukuran_satu,
    "all_tabel.tabel_dua.tr_satu.harga":tabel_dua_tr_harga_satu,
    "all_tabel.tabel_dua.tr_dua.ukuran":tabel_dua_tr_ukuran_dua,
    "all_tabel.tabel_dua.tr_dua.harga":tabel_dua_tr_harga_dua,
    "all_tabel.tabel_dua.tr_tiga.ukuran":tabel_dua_tr_ukuran_tiga,
    "all_tabel.tabel_dua.tr_tiga.harga":tabel_dua_tr_harga_tiga,
    "all_tabel.tabel_dua.tr_empat.ukuran":tabel_dua_tr_ukuran_empat,
    "all_tabel.tabel_dua.tr_empat.harga":tabel_dua_tr_harga_empat,
    "all_tabel.tabel_dua.tr_lima.ukuran":tabel_dua_tr_ukuran_lima,
    "all_tabel.tabel_dua.tr_lima.harga":tabel_dua_tr_harga_lima,
    "all_tabel.tabel_dua.tr_enam.ukuran":tabel_dua_tr_ukuran_enam,
    "all_tabel.tabel_dua.tr_enam.harga":tabel_dua_tr_harga_enam,
    "all_tabel.tabel_dua.tr_tuju.ukuran":tabel_dua_tr_ukuran_tuju,
    "all_tabel.tabel_dua.tr_tuju.harga":tabel_dua_tr_harga_tuju,
    "all_tabel.tabel_dua.tr_lapan.ukuran":tabel_dua_tr_ukuran_lapan,
    "all_tabel.tabel_dua.tr_lapan.harga":tabel_dua_tr_harga_lapan,
    "all_tabel.tabel_dua.tr_sembilan.ukuran":tabel_dua_tr_ukuran_sembilan,
    "all_tabel.tabel_dua.tr_sembilan.harga":tabel_dua_tr_harga_sembilan,
    "all_tabel.tabel_dua.tr_sepuluh.ukuran":tabel_dua_tr_ukuran_sepuluh,
    "all_tabel.tabel_dua.tr_sepuluh.harga":tabel_dua_tr_harga_sepuluh,
    } });        
    console.log(`all table berhasil`);
    res.redirect('/admin');
}else if(judul_tabel_tiga){
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({
    "all_tabel.tabel_tiga.judul":db_setting.all_tabel.tabel_tiga.judul,
    "all_tabel.tabel_tiga.tr_satu.ukuran":db_setting.all_tabel.tabel_tiga.tr_satu.ukuran,
    "all_tabel.tabel_tiga.tr_satu.harga":db_setting.all_tabel.tabel_tiga.tr_satu.harga
    },
    { $set: {
    "all_tabel.tabel_tiga.judul":judul_tabel_tiga,
    "all_tabel.tabel_tiga.tr_satu.ukuran":tabel_tiga_tr_ukuran_satu,
    "all_tabel.tabel_tiga.tr_satu.harga":tabel_tiga_tr_harga_satu,
    "all_tabel.tabel_tiga.tr_dua.ukuran":tabel_tiga_tr_ukuran_dua,
    "all_tabel.tabel_tiga.tr_dua.harga":tabel_tiga_tr_harga_dua,
    "all_tabel.tabel_tiga.tr_tiga.ukuran":tabel_tiga_tr_ukuran_tiga,
    "all_tabel.tabel_tiga.tr_tiga.harga":tabel_tiga_tr_harga_tiga,
    "all_tabel.tabel_tiga.tr_empat.ukuran":tabel_tiga_tr_ukuran_empat,
    "all_tabel.tabel_tiga.tr_empat.harga":tabel_tiga_tr_harga_empat,
    "all_tabel.tabel_tiga.tr_lima.ukuran":tabel_tiga_tr_ukuran_lima,
    "all_tabel.tabel_tiga.tr_lima.harga":tabel_tiga_tr_harga_lima,
    "all_tabel.tabel_tiga.tr_enam.ukuran":tabel_tiga_tr_ukuran_enam,
    "all_tabel.tabel_tiga.tr_enam.harga":tabel_tiga_tr_harga_enam,
    "all_tabel.tabel_tiga.tr_tuju.ukuran":tabel_tiga_tr_ukuran_tuju,
    "all_tabel.tabel_tiga.tr_tuju.harga":tabel_tiga_tr_harga_tuju,
    "all_tabel.tabel_tiga.tr_lapan.ukuran":tabel_tiga_tr_ukuran_lapan,
    "all_tabel.tabel_tiga.tr_lapan.harga":tabel_tiga_tr_harga_lapan,
    "all_tabel.tabel_tiga.tr_sembilan.ukuran":tabel_tiga_tr_ukuran_sembilan,
    "all_tabel.tabel_tiga.tr_sembilan.harga":tabel_tiga_tr_harga_sembilan,
    "all_tabel.tabel_tiga.tr_sepuluh.ukuran":tabel_tiga_tr_ukuran_sepuluh,
    "all_tabel.tabel_tiga.tr_sepuluh.harga":tabel_tiga_tr_harga_sepuluh,
    } });        
    console.log(`all table berhasil`);
    res.redirect('/admin');
}else if(judul_tabel_tiga){
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({
    "all_tabel.tabel_tiga.judul":db_setting.all_tabel.tabel_tiga.judul,
    "all_tabel.tabel_tiga.tr_satu.ukuran":db_setting.all_tabel.tabel_tiga.tr_satu.ukuran,
    "all_tabel.tabel_tiga.tr_satu.harga":db_setting.all_tabel.tabel_tiga.tr_satu.harga
    },
    { $set: {
    "all_tabel.tabel_tiga.judul":judul_tabel_tiga,
    "all_tabel.tabel_tiga.tr_satu.ukuran":tabel_tiga_tr_ukuran_satu,
    "all_tabel.tabel_tiga.tr_satu.harga":tabel_tiga_tr_harga_satu,
    "all_tabel.tabel_tiga.tr_dua.ukuran":tabel_tiga_tr_ukuran_dua,
    "all_tabel.tabel_tiga.tr_dua.harga":tabel_tiga_tr_harga_dua,
    "all_tabel.tabel_tiga.tr_tiga.ukuran":tabel_tiga_tr_ukuran_tiga,
    "all_tabel.tabel_tiga.tr_tiga.harga":tabel_tiga_tr_harga_tiga,
    "all_tabel.tabel_tiga.tr_empat.ukuran":tabel_tiga_tr_ukuran_empat,
    "all_tabel.tabel_tiga.tr_empat.harga":tabel_tiga_tr_harga_empat,
    "all_tabel.tabel_tiga.tr_lima.ukuran":tabel_tiga_tr_ukuran_lima,
    "all_tabel.tabel_tiga.tr_lima.harga":tabel_tiga_tr_harga_lima,
    "all_tabel.tabel_tiga.tr_enam.ukuran":tabel_tiga_tr_ukuran_enam,
    "all_tabel.tabel_tiga.tr_enam.harga":tabel_tiga_tr_harga_enam,
    "all_tabel.tabel_tiga.tr_tuju.ukuran":tabel_tiga_tr_ukuran_tuju,
    "all_tabel.tabel_tiga.tr_tuju.harga":tabel_tiga_tr_harga_tuju,
    "all_tabel.tabel_tiga.tr_lapan.ukuran":tabel_tiga_tr_ukuran_lapan,
    "all_tabel.tabel_tiga.tr_lapan.harga":tabel_tiga_tr_harga_lapan,
    "all_tabel.tabel_tiga.tr_sembilan.ukuran":tabel_tiga_tr_ukuran_sembilan,
    "all_tabel.tabel_tiga.tr_sembilan.harga":tabel_tiga_tr_harga_sembilan,
    "all_tabel.tabel_tiga.tr_sepuluh.ukuran":tabel_tiga_tr_ukuran_sepuluh,
    "all_tabel.tabel_tiga.tr_sepuluh.harga":tabel_tiga_tr_harga_sepuluh,
    } });        
    console.log(`all table berhasil`);
    res.redirect('/admin');
}else if(judul_tabel_empat){
    const db_setting = await db_atur_img.findOne({},);
    await db_atur_img.updateOne({
    "all_tabel.tabel_empat.judul":db_setting.all_tabel.tabel_empat.judul,
    "all_tabel.tabel_empat.tr_satu.ukuran":db_setting.all_tabel.tabel_empat.tr_satu.ukuran,
    "all_tabel.tabel_empat.tr_satu.harga":db_setting.all_tabel.tabel_empat.tr_satu.harga
    },
    { $set: {
    "all_tabel.tabel_empat.judul":judul_tabel_empat,
    "all_tabel.tabel_empat.tr_satu.ukuran":tabel_empat_tr_ukuran_satu,
    "all_tabel.tabel_empat.tr_satu.harga":tabel_empat_tr_harga_satu,
    "all_tabel.tabel_empat.tr_dua.ukuran":tabel_empat_tr_ukuran_dua,
    "all_tabel.tabel_empat.tr_dua.harga":tabel_empat_tr_harga_dua,
    "all_tabel.tabel_empat.tr_tiga.ukuran":tabel_empat_tr_ukuran_tiga,
    "all_tabel.tabel_empat.tr_tiga.harga":tabel_empat_tr_harga_tiga,
    "all_tabel.tabel_empat.tr_empat.ukuran":tabel_empat_tr_ukuran_empat,
    "all_tabel.tabel_empat.tr_empat.harga":tabel_empat_tr_harga_empat,
    "all_tabel.tabel_empat.tr_lima.ukuran":tabel_empat_tr_ukuran_lima,
    "all_tabel.tabel_empat.tr_lima.harga":tabel_empat_tr_harga_lima,
    "all_tabel.tabel_empat.tr_enam.ukuran":tabel_empat_tr_ukuran_enam,
    "all_tabel.tabel_empat.tr_enam.harga":tabel_empat_tr_harga_enam,
    "all_tabel.tabel_empat.tr_tuju.ukuran":tabel_empat_tr_ukuran_tuju,
    "all_tabel.tabel_empat.tr_tuju.harga":tabel_empat_tr_harga_tuju,
    "all_tabel.tabel_empat.tr_lapan.ukuran":tabel_empat_tr_ukuran_lapan,
    "all_tabel.tabel_empat.tr_lapan.harga":tabel_empat_tr_harga_lapan,
    "all_tabel.tabel_empat.tr_sembilan.ukuran":tabel_empat_tr_ukuran_sembilan,
    "all_tabel.tabel_empat.tr_sembilan.harga":tabel_empat_tr_harga_sembilan,
    "all_tabel.tabel_empat.tr_sepuluh.ukuran":tabel_empat_tr_ukuran_sepuluh,
    "all_tabel.tabel_empat.tr_sepuluh.harga":tabel_empat_tr_harga_sepuluh,
    } });        
    console.log(`all table berhasil`);
    res.redirect('/admin');
}
else{
    console.log("gagal");

}
    }
    else{
        res.redirect('/login')
    }

});

app.post('/link_toko', async (req,res) => {

    const db_setting = await  db_atur_img.findOne();
    const link = req.body.link_toko;

    console.log(link);

    console.log(db_setting.link_belanja);
    await db_atur_img.updateOne({ "link_belanja":db_setting.link_belanja}, { $set: {"link_belanja":link} });

    res.redirect("/admin");

});


app.post('/link_video', async (req,res) => {

    const db_setting = await  db_atur_img.findOne();
    const link = req.body.link_video;

    console.log(link);

    console.log(db_setting.link_video);
    await db_atur_img.updateOne({ "link_video":db_setting.link_video}, { $set: {"link_video":link} });

    res.redirect("/admin");

});

app.post('/judul_title', async (req,res) => {

    const db_setting = await  db_atur_img.findOne();
    const judul_title = req.body.judul_title;

    console.log(judul_title);

    console.log(db_setting.judul_title);
    await db_atur_img.updateOne({ "judul_title":db_setting.judul_title}, { $set: {"judul_title":judul_title} });

    res.redirect("/admin");

});

app.post('/profile-upload-multiple', upload.array('profile-files'), (req, res) => {
    res.redirect('/admin');

});
   

console.log("dia berjalan");
app.listen(port,(req, res) => console.log(`berjalan di port ${port}` ));


