const express= require('express');
const cors = require('cors');
const app = express();
const env  = require('dotenv');
const fetch = require('node-fetch');
app.use(express.json({extended: false}));

env.config();
app.use(cors());


const port = 5000;
app.post('/completions',async(req,res)=>{
    const options = {
        method:'POST',
        headers:{
            "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
            "content-type":'application/json'
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:req.body.message}],
            max_tokens:100

        })

    }
   try{

    const respones = await fetch('https://api.openai.com/v1/chat/completions',options);
    const ans = await respones.json();
    console.log(req.body.name)
    res.send(ans);
   }catch(err){
    console.log(err);

   }

})
app.listen(port, ()=>{
    console.log(`backend is running successfully in port ${port}`);
})