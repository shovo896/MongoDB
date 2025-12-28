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
app.get('/books', async (req, res) => { 
       try {
              const books = await db
                     .collection('books')
                     .find()
                     .sort({author:1})
                     .toArray()
              return res.status(200).json(books)
       } catch (err) {
              console.error('Failed to fetch books', err)
              return res.status(500).json({error:'Could not fetch the documents'})
       }
})


