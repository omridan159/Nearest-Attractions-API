
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
	}

}

module.exports = AttractionsRoute;
