const express = require('express');
const app = express();
const cors=require('cors');
const helmet=require('helmet');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sortenRouter= require('./router/sorten.js')
const port = process.env.PORT ||5000;
const URL =require('./Model/schema.js')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

if(process.env.NODE_ENV==='production')
{
    app.use(express.static(client/build));
}

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(data => (console.log('connected to database')))
    .catch(err => console.log(err));


app.get('/:hash', async(req, res) =>{
        const id=req.params.hash;
        console.log("id", id);
        if(!id)
        {
            res.send('Write proper url');
        }
        else{
            
           const getUrl=await URL.findById(id);
           res.redirect(getUrl.url);
        }
})
app.use('/api',sortenRouter);

app.listen(port, () => console.log(`app is running on server port ${port}`));