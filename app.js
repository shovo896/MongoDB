const express=require('express')
const { ObjectId } = require('mongodb')
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

// starts here 
app.get('/books/:id',(req,res)=>{
       if (ObjectId.isValid(req.params.id)){
              db.collection('books')
                     .findOne({_id: ObjectId(req.params.id)})
                     .then(doc => {
                            res.status(200).json(doc)
                     })
                     .catch(err=>{
                            console.error('Failed to fetch book', err)
                            res.status(500).json({error:'Could not fetch the document'});
                     })
       } else {
              res.status(500).json({error:'Invalid document id'})
       }
})



app.delete('/books/:id', async (req, res) => {
       const { id } = req.params

       if (!ObjectId.isValid(id)) {
              return res.status(400).json({ error: 'Invalid document id' })
       }

       try {
              const result = await db
                     .collection('books')
                     .deleteOne({ _id: new ObjectId(id) })

              if (result.deletedCount === 0) {
                     return res.status(500).json({ error: 'Document not found' })
              }

              return res.status(500).send()
       } catch (err) {
              console.error('Failed to delete book', err)
              return res.status(500).json({ error: 'Could not delete the document' })
       }
})

