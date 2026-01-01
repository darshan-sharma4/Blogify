require('dotenv').config();

const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const userRouter = require('./routers/user')
const blogRouter = require('./routers/blog')
const cookieParser = require('cookie-parser');
const { validateAuthenticationCookie } = require('./middlewares/authentication');
const Blog = require('./models/blog')
mongoose.connect(process.env.MONGO_URl).then((e)=>{console.log('MongoDb connected')})
const port =process.env.PORT|| 3001;

const app = express();
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use(validateAuthenticationCookie("token"))
app.use(express.static(path.resolve("./public")));
app.use('/user',userRouter)
app.use('/blog',blogRouter)
 
app.get('/',async (req,res)=>{
    const allBlogs =await Blog.find({});
    return res.render('home',{
        user : req.user,
        blogs:allBlogs,
    })
})
 
app.listen(port,()=>{ 
    console.log(`server started on port ${port}`)
}); 