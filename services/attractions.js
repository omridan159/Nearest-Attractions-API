const attractionsRepo = require('../repository/attractions-repository');
const helpers = require('../lib/helpers');
class AttractionsService {
   constructor() {}

   async getAttractions() {
      const attractions = await attractionsRepo.getAttractions();
      const unfavoriteAttractions =
         helpers.getUnfavoriteAttractionsList(attractions);

      return {
         data: attractions,
         unfavoriteAttractions,
      };
   }

   updateOneAttraction(id, favoriteStatus) {
      return attractionsRepo.updateAttractionFavoriteStatus(id, favoriteStatus);
   }
}
module.exports = new AttractionsService();
