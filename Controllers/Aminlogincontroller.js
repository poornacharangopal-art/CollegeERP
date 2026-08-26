const Admin=require("../models/admin");
exports.displayadminlogin=(req,res)=>{
    res.render("adminlogin");
}
exports.adminlogin=async(req,res)=>{
    const{email,password}=req.body;
    try{
    const admin=await Admin.findOne({email});
    if(!admin){
        return res.send("Incoreect credentials");
    }
    if(admin.password==password){
        req.session.user={
            id:admin._id,
            email:admin.email,
            role:"admin"
        }
        res.render("admindashboard",{admin});
    }
    else{
        return res.send("INcoreect password");
    }
}catch(err){
    console.error(err);
}
}