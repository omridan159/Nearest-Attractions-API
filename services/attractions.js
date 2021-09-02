const getAttractions =
   require('../repository/attractions-repository').getAttractions;
class AttractionsService {
   constructor() {}

   getAttractions() {
      return getAttractions();
   }
}
module.exports = new AttractionsService();
