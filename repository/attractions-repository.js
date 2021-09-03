const { getMongoClient } = require('../lib/mongo-config');

async function getAttractions(params = {}) {
   const client = await getMongoClient();
   return client
      .db('sample-db')
      .collection('attractions')
      .find(params)
      .toArray();
}

async function updateAttractionFavoriteStatus(id, favoriteStatus) {
   const client = await getMongoClient();

   const updateParams = { _id: id };

   return client
      .db('sample-db')
      .collection('attractions')
      .updateOne(updateParams, { $set: { isFavorite: favoriteStatus } });
}

module.exports = {
   getAttractions,
   updateAttractionFavoriteStatus
};
