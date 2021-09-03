const attractionsRepo = require('../repository/attractions-repository');
class AttractionsService {
   constructor() {}

   getAttractions() {
      return attractionsRepo.getAttractions();
   }

   updateOneAttraction(id, favoriteStatus) {
      return attractionsRepo.updateAttractionFavoriteStatus(id, favoriteStatus);
   }
}
module.exports = new AttractionsService();
