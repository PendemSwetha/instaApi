const express=require("express");
const PostModel=require("./Schema");
const router=express.Router();
const body_parser=require("body-parser");
router.use(body_parser.json())
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))
const cloudinary = require("./cloudinary")
router.get("/post",async(req,res)=>{
    try{
        const postdata=await PostModel.find()
        res.status(201).json(postdata)
    }
    catch(e)
    {
       res.json(
        {
            status:500,
            message:e.message
        }
       ) 
    }
})
    router.post("/generatePost",async(req,res)=>{
        try{
            const {author,location,description}=req.body
            console.log(req.body);
            const file=req.files.file.tempFilePath
            const image= await cloudinary.uploader.upload(file,{
                folder:"postdata"
            })
            
            const post= await PostModel.create(
                {
                    author : author,
                    location : location,
                    likes : Math.floor(Math.random()*200),
                    description : description,
                    postImage : image.secure_url,
                    date : new Date().toDateString()
                }
            )
        res.status(201).json({ message : "post created successfully" })
        } 
        catch (e) {
            res.json({
                status: 500,
                message: e.message
            })

        }
    })


    router.get("*",(req,res)=>{
        res.json({
    
            message :  "404 not found"
        })
    })

    module.exports=router;


