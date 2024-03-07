import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({path:"./env"});
const port = process.env.PORT || 8000

// database connection 
connectDB().then(()=>{
    app.listen(8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
});


/*
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`/{DB_NAME})
        app.on("error",(err)=>{
            console.log("err",err);
            throw err
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`app is running on port ${process.env.PORT}`)
        })

        
    } catch (error) {
        console.log('get error while database connection');
        throw error
    }
})()

*/