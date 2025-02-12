const express = require('express');
const app = express();


app.get('/api', (req,res)=>{
    res.json({'meow': ['meow1', 'meow2','meow3']})
})

const port = process.env.PORT || 5000;


app.listen(port, () =>{
    console.log(`Connected to port ${port}`);
})