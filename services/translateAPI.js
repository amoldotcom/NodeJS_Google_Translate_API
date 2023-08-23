const translateGoogle = require('@vitalets/google-translate-api');

class translateAPI {
    static getTranslatedText = async (bodyObj) => {
        // Input
        const text = bodyObj.text;
        // console.log(text);

        // destination language
        const language = bodyObj.language;
        // console.log(language);

        // call translate method with the text and language as parameters
        const result = await translateGoogle.translate(text, { to: language });
        // console.log(result.text);

        return result.text.trim();
    }
}

module.exports = { translateAPI };