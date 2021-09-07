const getUnfavoriteAttractionsList = (data) => {
   let unfavoriteObject = {};

   data.map((attraction, index) => {
      if (attraction.favorite === false) {
         unfavoriteObject[index + 1] = !attraction.favorite;
      }
   });

   return unfavoriteObject;
};

function getAttractionsTypes(data) {
   const mapAttractionTypes = data.map((attraction) => {
      return attraction.Attraction_Type;
   });
   mapAttractionTypes.push('הכל');

   const attractionTypes = [...new Set(mapAttractionTypes)];

   return attractionTypes;
}

module.exports = { getUnfavoriteAttractionsList, getAttractionsTypes };
