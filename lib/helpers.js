const getUnfavoriteAttractionsList = (data) => {
   let unfavoriteObject = {};

   data.map((attraction, index) => {
      if (attraction.favorite === false) {
         unfavoriteObject[index + 1] = !attraction.favorite;
      }
   });

   return unfavoriteObject;
};

module.exports = { getUnfavoriteAttractionsList };
