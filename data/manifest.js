const manifest = {
	id: "org.stremio.bulgarianmovies",
	version: "1.0.1",
	background:
		"https://raw.githubusercontent.com/frodkata/stremio-bg-movies/main/assets/background.jpg",
	logo: "https://raw.githubusercontent.com/frodkata/stremio-bg-movies/main/assets/logo.png",
	name: "Български филми",
	description:
		"Каталог с популярни български филми и стриймове към тях. https://github.com/frodkata/stremio-bg-movies",

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
