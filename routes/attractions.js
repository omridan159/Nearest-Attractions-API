const AttractionsService = require('../services/attractions');
let attractionsError = {
   error: true,
   name: 'attractionsError',
   message: 'Failed to retrive the attractions data',
};

let updateOneAttractionError = {
   error: true,
   name: 'updateOneAttraction',
   message: 'Failed to update the attractions data',
};

let updateOneAttractionSuccess = {
   error: false,
   name: 'updateOneAttraction',
   message: 'Successfuly update the attractions data',
};

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
         .catch(() => res.status(404).send(attractionsError));
   }

   updateOneAttraction(req, res, next) {
      const { headers, params, query, body } = req;

      const { id, favoriteStatus } = body;

      AttractionsService.updateOneAttraction(id, favoriteStatus)
         .then(() =>
            res.send({ ...updateOneAttractionSuccess, id, favoriteStatus })
         )
         .catch(() => res.status(404).send(updateOneAttractionError));
   }
}

module.exports = AttractionsRoute;
