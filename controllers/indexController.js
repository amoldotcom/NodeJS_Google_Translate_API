const { translateAPI } = require("../services/translateAPI.js");

class indexController {
	static indexGET = async (req, res, next) => {
		try {
			const data = {
				title: "ExpressJS Translate API",
			};
			await res.render("index", data);
		} catch (error) {
			console.log(error);
		}
	};
	static indexPOST = async (req, res, next) => {
		try {
			// console.log(req.body);
			const result = await translateAPI.getTranslatedText(req.body);
			// render the page with translation response as data
			const data = {
				title: "ExpressJS Translate API",
				translatedText: result,
			};
			await res.render("index", data);
		} catch (error) {
			console.log(error);
		}
	};
}

module.exports = { indexController };
