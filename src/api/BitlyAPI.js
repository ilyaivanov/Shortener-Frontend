export default class BitlyA {
    shorten(url) {
        //track if there are any pending requests
        //if there are - abot old and trigger new
        return new Promise(function (resolve) {
            let delay = 1000;

            let response = {
                "url": url,
                "shorten_url": "http://localhost:3000/s4"
            };
            let accessToken = a06400a1dcadee2de02a7df7bee8110fb03523ee;

            let bitLyrequest = `https://api-ssl.bitly.com/v3/shorten?access_token=${accessToken}&longUrl=${url}`;

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

            setTimeout(() => resolve(bitLyResponse), delay);
        });
    }
}