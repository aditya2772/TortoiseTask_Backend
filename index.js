const express = require("express");
const bodyparser= require("body-parser");
const cors = require("cors");

const app = express();
const profileRoutes = require('./app/routes/profiles.routes')
app.use(cors());
app.use(bodyparser.json());





app.use(profileRoutes);

app.listen(3000,()=>{
    console.log("server running..");

});