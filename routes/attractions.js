const AttractionsService = require('../services/attractions');
let attractionsError = {
   error: true,
   name: 'getAttractionsError',
   message: 'Failed to retrive the attractions data',
};

class AttractionsRoute {
   constructor(router) {
      this.router = router;
      this.registerRoutes();
   }

   registerRoutes() {
      this.router.get('/attractions', this.getAttractions.bind(this));
   }

   getAttractions(req, res, next) {
      const { headers, params, query } = req;

      AttractionsService.getAttractions()
         .then((data) => res.send(data))
         .catch((err) => res.status(404).send(attractionsError));
   }
}

module.exports = AttractionsRoute;
