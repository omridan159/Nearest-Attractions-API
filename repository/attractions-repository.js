const { getMongoClient } = require('../lib/mongo-config');

async function getAttractions(params = {}) {
   const client = await getMongoClient();
   return client
      .db('sample-db')
      .collection('attractions')
      .find(params)
      .toArray();
}

module.exports = {
   getAttractions,
};
