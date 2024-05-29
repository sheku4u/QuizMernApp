import app from "./app.js";




app.listen(process.env.PORT, ()=>{
    console.log(`backend is running at http://localhost:${process.env.PORT}`)
})