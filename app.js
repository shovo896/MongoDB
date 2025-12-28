const express=require('express')
const {connectToDb,getDb}=require('./db')
// init app 
const app = express()
let db

connectToDb((err) => {
       if(!err){
              app.listen(3000,()=> {
       console.log('app listening on port 3000')})
       db=getDb()

       }

})


// routes 
app.get('/books',(req,res)=> { 
       db.collection('books').find()
              res.json({mssg:"welcome to the api"})})


