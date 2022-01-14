const mysql= require("mysql2");

//database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aditya@1420",
    database:"tortoise",
    port:3306
    
});
//checking databse connect or not
db.connect(err=>{
    if(err){console.log(err,"dberr");}
    console.log("database connected");
});

module.exports = db;