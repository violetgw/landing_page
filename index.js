const port = 3000;
const express = require("express");
const app = express();
const path = require('path');
var favicon = require('serve-favicon')




app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use(favicon(path.join(__dirname, 'public', 'icon_violet.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/landing_page', async (req, res)=> {

res.render('landing_page_dua');

})


console.log("dia berjalan");
app.listen(port,(req, res) => console.log(`berjalan di port ${port}` ));