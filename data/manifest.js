const manifest = {
	id: "org.stremio.bulgarianmovies",
	version: "1.0.0",

	name: "Български филми",
	description: "Български филми",

	resources: ["catalog", "stream"],

	types: ["movie"],

	catalogs: [
		{
			type: "movie",
			id: "Български Филми",
		},
	],

	// prefix of item IDs (ie: "tt0032138")
	idPrefixes: ["tt"],
};

module.exports = manifest;
