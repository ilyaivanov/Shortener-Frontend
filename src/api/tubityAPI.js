import $ from 'jquery';

//Configuration section
let host = 'http://localhost:9990';


export default class TubityAPI {
    shorten(url) {
        return new Promise((resolve, reject) => {
            let encodedUrl = encodeURIComponent(url);
            let hostUrl = host + '/s';
            let payload = {url};

            console.log('Creating a POST request to', hostUrl);
            console.log('Payload', payload);

            $.post(hostUrl, payload)
                .done(response => {
                    console.log('Response', response);
                    resolve(response)
                })
                .fail(error => {
                    console.log('Error', error);
                    reject('Error appear while accessing ' + hostUrl)
                });
        });
    }
}

// TubitySampleResponse = {
//     "url": "http://some.url",
//     "shorten_url": "http://localhost:3000/s4"
// }
