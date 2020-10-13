const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const URL =require('../Model/schema')

router.post('/sorten', async (req, res) => {
    // console.log(req.body);
    if(!req.body.url)
    {
       return  res.send('Please provide url');
    }
    else{
        const uniqueId=uniqid();
        const data=new URL({
            _id:uniqueId,
            url:req.body.url,
            hash:uniqueId,
        });
    
        await data.save();
    
       return res.send({data});
    }
   

});



module.exports=router;