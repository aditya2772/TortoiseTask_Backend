
const db= require("../config");


//fetching data
const fetechProfiles = (req,res)=>{
    let qr= `select * from profiles`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errors');
        }
        if(result.length>0){
            res.send({
                message:"all profiles data",
                data:result
            });
        }
    });
}


//fetch profile by id
const fetchProfile=(req,res)=>{
    let gID=req.params.id;

    let qr=`select * from profiles where id= ${gID}`;
    db.query(qr,(err,result)=>{
        if(result.length>0){
            res.send({
                message:"get single data",
                data:result
            });
        }
        else{
            res.send({
                message:"data not found"
            });
        }
    })
}

//fetching paused data
const fetechPausedProfiles = (req,res)=>{
    // let status = req.params.status
    let qr= `SELECT * FROM profiles WHERE status = "pause"`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errors');
        }
        if(result.length>0){
            res.send({
                message:"all pause profiles data",
                data:result
            });
        }
    });
}

//create profile
const createProfile = (req,res)=>{
    console.log(req.body,'createdata');
    let name = req.body.name;
    let birthdate = req.body.birthdate;
    let status = req.body.status;
   
   

    let qr=`insert into profiles (name,birthdate,status) values('${name}','${birthdate}','${status}' )`;

    console.log(qr,"qr");

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        
        res.send({
            message:'data inserted'
        })
       
    });
}


// var updateData=req.body;
// var sql = `UPDATE users SET ? WHERE id= ?`;
// db.query(sql, [updateData, id], function (err, data) {
// if (err) throw err;
// console.log(data.affectedRows + " record(s) updated");
// });
// res.redirect('/users/user-list');


//update profile
const updateProfile = (req, res) => {
    console.log(req.body, 'updataData');


    let pID = req.params.id;
    var updateData = req.body;

    let qr = `UPDATE profiles SET ? WHERE id=?`;
    db.query(qr, [updateData, pID], function (err, data) {
        if (err) {

            console.log(err);
        }
        else {
            res.send({
                message: 'data updated'
            });

        }

    });


}

//deleting profile
const deleteProfile = (req,res)=>{
    let pID= req.params.id;

    let qr =`delete from profiles where id= '${pID}' `;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message:'data deleted'
        })
    })
}

module.exports={
    fetechProfiles,fetechPausedProfiles,fetchProfile,createProfile,updateProfile,deleteProfile
}