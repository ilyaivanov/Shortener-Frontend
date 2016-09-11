import $ from 'jquery';

export default class BitlyA {
    shorten(url) {
        return new Promise(function (resolve, reject) {
            let encodedUrl = encodeURIComponent(url);
            let accessToken = 'a06400a1dcadee2de02a7df7bee8110fb03523ee';
            let bitLyrequest = `https://api-ssl.bitly.com/v3/shorten?access_token=${accessToken}&longUrl=${encodedUrl}`;

            // bitLySampleResponse = {
            //     "status_code": 200,
            //     "status_txt": "OK",
            //     "data": {
            //         "long_url": "original response",
            //         "url": "http:\/\/bit.ly\/2ciW6PZ",
            //         "hash": "2ciW6PZ",
            //         "global_hash": "2ciV2v8",
            //         "new_hash": 1
            //     }
            // }

            $.ajax(bitLyrequest)
                .done(function (response) {
                    if (response.status_code == 200) {
                        resolve(response.data)
                    } else {
                        var humanMessages = {
                            "INVALID_URI": "Invalid Url",
                            "ALREADY_A_BITLY_LINK": "You are trying to short a bit.ly link"
                        };
                        var message = humanMessages[response.status_txt] || 'Unknown error';
                        reject(message);
                    }
                })
                .fail(reject);
        });
    }
}