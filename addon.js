const { addonBuilder } = require("stremio-addon-sdk");
const movies = require("./data/movies");
const manifest = require("./data/manifest");

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(function (args) {
	if (movies[args.id]) {
		return Promise.resolve({ streams: [movies[args.id]] });
	} else {
		return Promise.resolve({ streams: [] });
	}
});

const METAHUB_URL = "https://images.metahub.space";

const generateMetaPreview = function (value, key) {
	//https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/meta.md#meta-preview-object
	const imdbId = key.split(":")[0];
	return {
		id: imdbId,
		type: value.type,
		name: value.name,
		poster: METAHUB_URL + "/poster/medium/" + imdbId + "/img",
		logo: METAHUB_URL + "/poster/medium/" + imdbId + "/img",
	};
};

builder.defineCatalogHandler(function (args, cb) {
	const metas = Object.entries(movies)
		.filter(([_, value]) => value.type === args.type)
		.map(([key, value]) => generateMetaPreview(value, key));

	return Promise.resolve({ metas: metas });
});

module.exports = builder.getInterface();
