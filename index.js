const app = require('express')();
const express = require('express')();
session = require('express-session')

app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  maxAge: 60000,
  cookie: { secure: true }
}))

app.use('/api',require("./router.js")) 
  
app.use(function(req, res, next) {
    if (req.accepts('json')) {
      res.json({success: false, error: {
        "code":404,
        "type":"Route not found",
        "info":"The route you attempted to find was not founds"
      } });
      return;
    }

    res.type('txt').send('Not found');
  });
app.listen(80)