const express = require('express');
const app = express();
const PORT = 3000;
const GETPATH = ['/','/about','/coffee','/bean','/contact'];
app.set('port', PORT);
app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use('/public',express.static('public'));
// GET path
app.get(GETPATH, (req, res) => {
  let getCurentPath = req.path;
  if(getCurentPath == '/') res.render('main',{ path: getCurentPath });
  if(getCurentPath == '/coffee') res.render('coffee',{ path: getCurentPath });
  if(getCurentPath == '/bean') res.render('bean',{ path: getCurentPath });
  if(getCurentPath == '/about') res.render('about',{ path: getCurentPath });
  if(getCurentPath == '/contact') res.render('contact',{ path: getCurentPath });
})
app.listen( app.set('port') , () => {
  console.log(`start serve ${app.set('port')} port`);
})