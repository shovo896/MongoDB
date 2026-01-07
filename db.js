
const {MongoClient}=require('mongodb')
let dbConnection
let uri='mongodb+srv://suvo10info_db_user:suvo1234@clu.n2ckpcm.mongodb.net/?appName=Cluster0'

module.exports={
       connectToDb:(cb) => {MongoClient.connect(uri)
              .then((client) => {
                     dbConnection=client.db()
                     return cb()
              })
              .catch((err) => {
                     console.log(err)
                     return cb(err)
              })
       },
       getDb : () => dbConnection
}
