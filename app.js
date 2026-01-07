const express=require('express')
const { ObjectId } = require('mongodb')
const {connectToDb,getDb}=require('./db')
// init app 
const app = express()
app.use(express.json()) // parse JSON request bodies
let db

connectToDb((err) => {
       if (err) {
              console.error('Failed to connect to the database', err)
              return
       }

       app.listen(3000,()=> {
              console.log('app listening on port 3000')
       })
       db=getDb()

})


// routes 
app.get('/books', async (req, res) => { 
       const page = req.query.p || 0 
       const booksPerPage = 3
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
       if (!ObjectId.isValid(req.params.id)){
              return res.status(400).json({error:'Invalid document id'})
       }

       db.collection('books')
              .findOne({_id: ObjectId(req.params.id)})
              .then(doc => {
                     if (!doc) {
                            return res.status(404).json({ error: 'Document not found' })
                     }
                     res.status(200).json(doc)
              })
              .catch(err=>{
                     console.error('Failed to fetch book', err)
                     res.status(500).json({error:'Could not fetch the document'});
              })
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

              if (!result.deletedCount) {
                     return res.status(404).json({ error: 'Document not found' })
              }

              return res.status(204).send()
       } catch (err) {
              console.error('Failed to delete book', err)
              return res.status(500).json({ error: 'Could not delete the document' })
       }
})

// patch starts here 
app.patch('/books/:id', async (req, res) => {
       const updates = req.body
       const { id } = req.params
       // example body: {"title":"new title","rating":6}

       if (!ObjectId.isValid(id)) {
              return res.status(400).json({ error: 'Invalid document id' })
       }

       try {
              const result = await db
                     .collection('books')
                     .updateOne({ _id: new ObjectId(id) },{$set:updates})

              if (!result.matchedCount) {
                     return res.status(404).json({ error: 'Document not found' })
              }

              return res.status(200).json({ modifiedCount: result.modifiedCount })
       } catch (err) {
              console.error('Failed to update book', err)
              return res.status(500).json({ error: 'Could not update the document' })
       }

})


