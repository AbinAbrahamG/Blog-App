const express = require('express');
const router = express.Router();
router.use(express.json());
const userModel = require('../model/userModel');
const jwt=require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const user=await userModel.findOne({email:req.body.email});
    if(!user){
        res.status(404).send({message:'Invalid Email'});
    }
    try{
        if(user.password==req.body.password){
            const payload={email:user.email,password:user.password};
            const tkn=jwt.sign(payload,'blogApp');
            res.status(200).send({message:'Login Successfull',token:tkn});
        }
        else{
            res.status(404).send({message:'Invalid Password'});
        }
    } catch(err){
        console.log(err);
    }
})





module.exports = router;