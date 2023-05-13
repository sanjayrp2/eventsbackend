const {Details} = require('./user_schema');
module.exports.insertdata = async(req,res) =>{
    console.log(req.body)
    const user = new Details({  
        name: req.body.name,
        email:req.body.email,
        phone_num: Number(req.body.phone_num),
        password: req.body.password,
        department:req.body.department
    });
    const iuser = await Details.findOne({phone_num:req.body.phone_num});
    if(iuser)
    {
        res.send({msg:"DATA ALREADY EXISTS"});
    }
    else
    {
        const userdata = await user.save();
        res.send(userdata);
    }

};
module.exports.getone=async(req,res)=>{
    const user=await Details.findOne({phone_num:Number(req.params.pn)})
    if(user) res.send(user)
    else res.send({msg:"not found !"})
}
