export default class ShorteningAPI {
    shorten(url) {
        //track if there are any pending requests
        //if there are - abot old and trigger new
        return new Promise(function (resolve) {
            let delay = 1000;

            let response = {
                "url": url,
                "shorten_url": "http://localhost:3000/s4"
            };

            setTimeout(() => resolve(response), delay);
        });
    }
}