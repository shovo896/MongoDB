const express=require('express')
const {connectToDb,getDb}=require('./db')
// init app 
const app = express()
connectToDb(() => {
       
})
app.listen(3000,()=> {
       console.log('app listening on port 3000')
})
// routes 
app.get('/books',(req,res)=> { res.json({mssg:"welcome to the api"})})


