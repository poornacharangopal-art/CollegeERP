const Notice=require("../models/Notice");
exports.displayNotice=async(req,res)=>{
    const notice=await Notice.find();
    res.render("notice",{notice});
};

