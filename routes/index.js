var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs");
const fileArray = ['file1.txt','file2.txt','files.txt'];
// create an express app

//  GET home page. 

// make a post route "/create" index  in "index.js"
// now create a folder name "upload in public folder",
// using  path package send pathof the folder /file.ext.to browser.
// let filepath =pat.join(__dis name.".."public","upload", req.body.filename)

router.get('/', function(req, res, next) {
  const filepath = path.join(
    __dirname,
    "..",
    "public",
    "upload",
  )
});
  // us fs package to and createan empty file onthe samepath abpve and send message to browser "file created"
  const files = fs.readdirSync(filepath);
  // console.log(files)

  res.render('index', {files,filedata:""});  
  // read data in index ;
// post
router.post('/create', function(req, res, next) {
try{
  const filepath = path.join(
    __dirname,
      "..",
    "public",
    "upload",
    req.body.filename 
  );
  fs.writeFileSync(filepath,"");
   res.redirect("/")
  // res.redirect(`/${req.body.filename}`)
}
catch(error){
  res.send(error);
}
});
// 
router.get("/file/:filename",function(req,res,next){
  try{
    const filepath = path.join(
      __dirname,
      "..",
      "public",
      "upload",
      req.params.filename 
    );
    fs.unlinkSync(filepath);
    // delete the file
    res.redirect("/")
  
  }catch (error){
    res.send(error);
  }
    
  });
  router.get("/:filename",function(req,res,next){
    const folderpath = path.join(
      __dirname,
      "..",
      "public",
      "upload",
    );
    
    const files = fs.readdirSync(folderpath);
      const filepath = path.join(
        __dirname,
        "..",
        "public",
        "upload",
        req.params.filename 
      );
// res.send(req.params.filename) 
const filedata = fs.readFileSync(filepath,"utf-8");
res.render("index",{ files,filedata });

});

module.exports = router;
// 8.make the list item clickable and redirect to /file/:filename get route
//  make /file/filename get route in "index.js"

//  where the route send the param "filename" to browser


