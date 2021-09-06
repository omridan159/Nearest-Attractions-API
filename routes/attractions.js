const AttractionsService = require('../services/attractions');
const responses = require('../lib/responses');

class AttractionsRoute {
   constructor(router) {
      this.router = router;
      this.registerRoutes();
   }

   registerRoutes() {
      this.router.get('/attractions', this.getAttractions.bind(this));
      this.router.post('/attractions', this.updateOneAttraction.bind(this));
   }

   getAttractions(req, res, next) {
      const { headers, params, query } = req;

      AttractionsService.getAttractions()
         .then((data) => res.send(data))
         .catch(() => res.status(404).send(responses.getAttractionsError));
   }

   updateOneAttraction(req, res, next) {
      const { headers, params, query, body } = req;

      const { id, favoriteStatus } = body;

      AttractionsService.updateOneAttraction(id, favoriteStatus)
         .then(() =>
            res.send({
               ...responses.updateOneAttractionSuccess,
               id,
               favoriteStatus,
            })
         )
         .catch(() =>
            res.status(404).send(responses.updateOneAttractionError)
         );
   }
}

module.exports = AttractionsRoute;
