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
       let books =[]
       db.collection('books').find()
       .sort({author:1})
       .forEach(book=> books.push(book))// cursor toArr for each 
              res.json({mssg:"welcome to the api"})})


