const express = require('express');
const order = require('./routes/order')
const app= express();
const port=8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message:"S1 starts here"
    })
})

app.use('/api/v1',order);


app.listen(port,()=>{
    console.log(`S1 is running at port ${port}`)
})