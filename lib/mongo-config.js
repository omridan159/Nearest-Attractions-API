const MongoClient = require('mongodb').MongoClient;

let client;

async function getMongoClient() {
   if (!client) {
      client = await MongoClient.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
   }
   return client;
}

module.exports = {
   getMongoClient,
};
