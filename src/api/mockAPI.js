import isUrlValid from './../utils/validateUrl';

export default class MockApi {
    shorten(url) {
        //set this flag to debug user experience when bit.ly is responsing to long
        var additionalDelay = 1500;

        return new Promise(function (resolve, reject) {
            if (isUrlValid(url)) {
                let sampleResponse = {
                    url,
                    "shorten_url": "http://localhost:3000/s4"
                };
                setTimeout(() => {debugger; return resolve(sampleResponse)}, additionalDelay);
            } else {
                reject('Url is invalid');
            }
        });
    }
}