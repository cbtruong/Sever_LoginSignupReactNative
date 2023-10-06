const express=require('express');
const post=8000;

const app=express();
const bodyParser=require('body-parser');
//
require('./db.js');
require('./models/User.js');
//
const authRouter=require('./routes/authRoutes.js');

//
app.use(bodyParser.json());
app.use(authRouter);
//

app.get('/',(req,res)=>{
    res.send("This is home page");
})
app.listen(post,()=>{
    console.log(`Server is running on port ${post}`);
})