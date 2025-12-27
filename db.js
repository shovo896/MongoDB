
const {MongoClient}=require('mongodb')


module.exports={
       connectToDb:() => {MongoClient.connect('mongodb://localhost:27017/bookstore')
              .then((client) => {
                     client.db()
              })
       },
       getDb : () => {}
}
