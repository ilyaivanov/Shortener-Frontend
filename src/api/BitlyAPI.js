import $ from 'jquery';

export default class BitlyA {
    shorten(url) {
        return new Promise(function (resolve, reject) {
            var encodedUrl = encodeURIComponent(url);
            let accessToken = 'a06400a1dcadee2de02a7df7bee8110fb03523ee';
            let bitLyrequest = `https://api-ssl.bitly.com/v3/shorten?access_token=${accessToken}&longUrl=${encodedUrl}`;

            let bitLyResponse = {
                "status_code": 200,
                "status_txt": "OK",
                "data": {
                    "long_url": url,
                    "url": "http:\/\/bit.ly\/2ciW6PZ",
                    "hash": "2ciW6PZ",
                    "global_hash": "2ciV2v8",
                    "new_hash": 1
                }
            };

            $.ajax(bitLyrequest)
                .done(response => resolve(response.data))
                .fail(reject);
        });
    }
}