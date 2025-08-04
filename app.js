const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index')
const dotenv = require("dotenv").config();

const app = express();

// Middleware
app.set('view engine',"ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


//Routes
app.use("/", indexRouter);

//Server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})