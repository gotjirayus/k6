// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main () {
  let response

  group('page_4 - https://race.phuket.run/', function () {
    response = http.get('https://race.phuket.run/', {
      headers: {
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"7e4e847ddc452eace1bd5ae5e7f82e71862c7a78f308bcd429668ffbaadc682e-br"',
        'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
      }
    })

    response = http.get('https://browser.sentry-cdn.com/5.6.3/bundle.min.js', {
      headers: {
        Origin: 'https://race.phuket.run',
        Referer: 'https://race.phuket.run/',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.get(
      'https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=default%2Ces6%2CWeakMap%2CArray.prototype.includes%2CObject.values%2CObject.entries%2CIntl%2CHTMLCanvasElement.prototype.toBlob%2CHTMLCanvasElement.prototype.toDataUrl%2CXMLHttpRequest%2CObject.setPrototypeOf%2CObject.keys%2CObject.assign&features=default%252Ces6%252CWeakMap%252CArray.prototype.includes%252CObject.values%252CObject.entries%252CIntl%252CHTMLCanvasElement.prototype.toBlob%252CHTMLCanvasElement.prototype.toDataUrl%252CXMLHttpRequest%252CObject.setPrototypeOf%252CObject.keys%252CObject.assign',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/7.a62fa1b7.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"51038e73d0b69415658679e0d6cbb23d37addba7df9124811b0f4106703f48a5-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"4d1083c842256f6bea792bf1597a4fa64bd47fccb04885fdebc47e7560c1f43c-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/7.7921c5d3.chunk.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'if-none-match':
            '"a524dc48db480ac0486c382a865eb9583a5257507ef61e46d05c0fd1b2934638-br"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/main.32d565ee.chunk.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'if-none-match':
            '"bef9d342a587676946f40a6ce9ffab44253a08a738005424b7bc77734f423405-br"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
        }
      }
    )

    response = http.get(
      'https://fonts.googleapis.com/icon?family=Material+Icons&family=Material%2BIcons',
      {
        headers: {
          Referer: 'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.googleapis.com/css?family=Kanit%3A200%2C300%2C400%2C500%2C600%2C700%2C800%2C900',
      {
        headers: {
          Referer: 'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5aOhWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCYdA.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwA.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWzVaF5NQ.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        Referer: 'https://race.phuket.run/',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"currentUserQuery","variables":{},"query":"query currentUserQuery {\\n  currentUser {\\n    _id\\n    email\\n    profile {\\n      _id\\n      imageUrl\\n      firstName\\n      lastName\\n      birthDate\\n      nationalId\\n      nationality\\n      gender\\n      telephone\\n      __typename\\n    }\\n    achievements {\\n      _id\\n      reward {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        type\\n        badge {\\n          completed\\n          __typename\\n        }\\n        __typename\\n      }\\n      createdAt\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.get('https://race.phuket.run/manifest.json', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        'if-none-match':
          '"3d55a8df77aa00c3f9bfe28de7545ae467fd5707d6146ede7708e3a336802346-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/logothairun-(W).png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'if-none-match':
          '"b707df1b2e1d4d568d8636e4cacccc32375da149643289ac55b91a626e69656b-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/js/4.d37f87fe.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"29a2018f2e205b679d181137b21ff7d14cb9d44df80578dc9df01b8b256518f2-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 05:27:01 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/9.5cce5eb0.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"82e07554cbed37d965a85a802bbc4a68d7fb9c1a78efd3f84654f5db5576cab8-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/9.f2987607.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"197065bb759cd85fcf30542bf2838ac90b59bf57dc723724e61687f9be7c5c2c-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/16.37001907.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"b26904374a483cc87bf3b0ca23fd6c25eee9ef463251ae7c8544b0f2398392d7-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/16.32876527.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"ac1a78e27bd15b9581fc024dbe520d34be63309aa077baa73e6115370d617559-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
        }
      }
    )

    response = http.get('https://race.phuket.run/facebook.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"80cba0d1e660e5e4857fc32f85c02c8ca380032589021caccee801ad4653ebfa-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
      }
    })

    response = http.get('https://race.phuket.run/messenger.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"d629a433b204c36e7675b7623600aa1f1e4bc62e80cdea854fcc202a086321ea-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
      }
    })

    response = http.get(
      'https://race.phuket.run/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%81-02.png',
      {
        headers: {
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'if-none-match':
            '"7b3045883edd528e7cb04d0ee97639bb0dc2d48ef731200d5f46cb2c28c9996f"',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":true}}},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    thumbnailMobileUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.get('https://race.phuket.run/sport%20(2).png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'if-none-match':
          '"3a1bff6bb6743bb3838f212bd4c6f613194a9a24df63aab54f25d85a62e5f96f-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
      }
    })

    response = http.get('https://race.phuket.run/icon_option-b.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"45412668c57e95ef2a0bd7a1998cebdc1358270a1f3e17e3a218e6c0926e118c-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8'
      }
    })

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/4f014d11-4344-4c7b-80d4-cb8fe3815939.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/7ea4ad51-afc9-4723-96ed-56fbbf4e7d97.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/b68a06a3-b450-463b-9f5d-1a26cc9de269.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/5d2d0c2f-657d-429c-b4fb-7fdc068d52a6.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/125bb828-a5f6-4087-84ab-ee7fd3ce2609.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ae0b0338-7eb7-41ef-b18c-6ddfdcdabb8e.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/d1079612-7113-4360-8c18-63f8fae949ae.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/9cd21e02-360c-43d4-9250-31c4359b3ba7.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/8b3e3cb0-64a6-4fe2-98c0-c104694b6845.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/1802c809-83a2-40f7-acb1-70025560af70.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/5a4bbb9a-ffbf-4b99-ab17-170095009850.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/BS10/cover/Cover-VIP.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ed037b55-c3fc-4794-bbde-84d81a5dd63b.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/25f190a1-9a69-4d16-912d-5683d3cc8a0a.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/1c2b94ff-4af6-457d-b12d-becf00836cd3.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/181f06dc-9c0c-4f50-88fb-bee7d059dec7.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/51272759-8dec-405b-aab1-336fe40afe4c.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/MVRBS21/theme.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":false}},"limit":20},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    thumbnailMobileUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/css/1.4ea73472.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"e3b08af28b9c95b53d65eb251b469c83488ff0d433bad242bd3ac057d5502b27-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/1.18f90bdd.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"4e592ff8b02108d963335dafb8e65a8a248c4c61448eec295ef6bc3b4ee4c4f5-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/2.df40423d.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"3c1d188a614324c8dfd4acd35141fd8916713c53bd4761724fceac9f6e4c36d9-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/2.f3973142.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"65aec48384144f304d0c37b13e3bbd12598a32d354ccddccae77cabbcf69b829-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/3.47f04e96.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"7ec52a1cba303bcf49e341a69cf4f7c6899a90aec20ff7909a9ebfb6d319264d-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/3.b947325a.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"56f88f27be53539edbfc8aab4f3c33a430d5eb3de187cae0ff02a8171bbb315a-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/13.f35e10c3.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"5571bfd280fad4ead6d42185b4b7361d5bfe53c9c64b8d712cddde8a6c83e0ff-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/13.3bcf7cce.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"0fdd40a49268b0aac35153164f78fecc527d60a9d8e380d3a7c87ce62dc1e184-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/17.8f92c44e.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"4a0386a4b09602972e40df19220472866d18fcea6156b582b9fab5d7a5b25c52-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/17.9a66a328.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"7377bbf3669a2b7c68bca060293bb98f203bb0f214aa6dea4142ce4200c269b2-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"eventPageFromSlug","variables":{"slug":"Test-11"},"query":"query eventPageFromSlug($slug: String!) {\\n  eventPageFromSlug(slug: $slug) {\\n    _id\\n    slug\\n    coverUrl\\n    startDate\\n    endDate\\n    liveLegacy\\n    website\\n    redirectTo\\n    hideDate\\n    testMode\\n    isSoldOut\\n    provinces\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    ticketsQuota {\\n      _id\\n      count\\n      limit\\n      __typename\\n    }\\n    description {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    location\\n    contentSections {\\n      _id\\n      title {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      body {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      __typename\\n    }\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    slug\\n    isRegOpen\\n    periods {\\n      _id\\n      start\\n      end\\n      preRegisterStart\\n      preRegisterEnd\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      preRegister\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        period {\\n          _id\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      registrationType {\\n        _id\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      registration {\\n        _id\\n        fee\\n        fields {\\n          _id\\n          name\\n          enabled\\n          required\\n          unique\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        enterNotice {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      participant {\\n        _id\\n        uniqueNationalId\\n        uniqueEmail\\n        fields {\\n          _id\\n          name\\n          enabled\\n          required\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          validations {\\n            _id\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      couponCode {\\n        _id\\n        enabled\\n        __typename\\n      }\\n      payment {\\n        _id\\n        priceSource\\n        __typename\\n      }\\n      ui {\\n        _id\\n        entryFee {\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    registrationTypes {\\n      _id\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      infoMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      privilegeKeys\\n      hidden\\n      price\\n      minParticipants\\n      maxParticipants\\n      restrictions\\n      couponCodeEnabled\\n      couponCodeRequired\\n      periodIds\\n      ticketTypeIds\\n      productTypeIds\\n      order\\n      limitId\\n      deliveryOptions {\\n        _id\\n        enabled\\n        __typename\\n      }\\n      __typename\\n    }\\n    ticketQuestions {\\n      _id\\n      kind\\n      masterKind\\n      inputType\\n      default\\n      order\\n      required\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      infoMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      opts\\n      items {\\n        _id\\n        imageUrl\\n        value {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    productTypes {\\n      _id\\n      price\\n      deliveryOption\\n      deliveryPrice\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      questions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        infoMessage {\\n          en\\n          th\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    ticketTypes {\\n      _id\\n      group\\n      price\\n      deliveryOption\\n      deliveryPrice\\n      reserveNumber\\n      reservedNumbers\\n      shirtEnabled\\n      finisherShirtEnabled\\n      quantity\\n      periodId\\n      ageCategoryIds\\n      order\\n      shirtTypeIds\\n      shirtIds\\n      finisherShirtTypeIds\\n      finisherShirtIds\\n      hideOnFrontPage\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      participantFields {\\n        _id\\n        name\\n        enabled\\n        required\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        validations {\\n          type\\n          params\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      virtualBib {\\n        _id\\n        backgroundUrl\\n        fonts {\\n          _id\\n          fontFamily\\n          fontSrcUrl\\n          __typename\\n        }\\n        numberStyle {\\n          _id\\n          font\\n          textAlign\\n          fillStyle\\n          top\\n          left\\n          __typename\\n        }\\n        nameStyle {\\n          _id\\n          font\\n          textAlign\\n          fillStyle\\n          top\\n          left\\n          __typename\\n        }\\n        __typename\\n      }\\n      race {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        distance\\n        distanceUnit\\n        startTime\\n        ageCategoryDiff\\n        ageRangeStrict {\\n          male {\\n            min\\n            max\\n            __typename\\n          }\\n          female {\\n            min\\n            max\\n            __typename\\n          }\\n          __typename\\n        }\\n        ageCategories {\\n          gender\\n          min\\n          max\\n          __typename\\n        }\\n        __typename\\n      }\\n      questions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/Test-11',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5KPxWzVaF5NQ.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5aOhWzVaF5NQ.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5KPxWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWzVaF5NQ.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/cff256ce-6c44-4e2c-8a51-d0868956d2e1.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data':
            'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCLvLygEI483KAQ==',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/Test-11',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"9c4a18b76c7fa6b36e2323185c7dc9fe"',
          'if-modified-since': 'Mon, 20 Jul 2020 03:23:21 GMT'
        }
      }
    )

    response = http.get('https://race.phuket.run/user-circle.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/Test-11',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"2e7d7a7996c933df0484d88edf8eb68a69cdb70c63c3da3995c49a955e19669a-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/pin.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/Test-11',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"93dfd38bf47d10f97f90e1b9beabc08d297cfe69b3845c851b1721b5178259b8-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/running.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/Test-11',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"3d5d0a4b43a6ab018ec1c59a13168a2f1f487d8e90b013efba219fd0ebc703ab-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/calendar.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/Test-11',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"d12d611753e2725c21a7aca56d20b4b33ffcca3691eb29ffd72f40223b22f655-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/alert.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/Test-11',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
        'if-none-match':
          '"716015cd08a8b5d1dfe78e3055728b76dd315bd47eb05ecc37541d1e1c6c4fc1-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/css/0.08d9b104.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"aefbcae3ae31c82ff5cddf8842f6c48b0294d6c582b32cc9c14f7418cf6f1b99-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/0.7065257d.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"bf435d1aa0097e41c2e1b1f6e3d3529252de30b8e69067bf6e35744c03688ab8-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/8.30fd4819.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"d861e56e49cbeb6ddfe9a81f76a75d68936bcecd15b6abb89f3505fb00a31d2b-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/8.bcb73ad4.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'if-none-match':
            '"8ddad4cc2e6296d0bf8fd8a8ab491c4646f39083aed5bed2472132a6d4f9f95d-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"eventRegisterFromSlug","variables":{"slug":"Test-11"},"query":"query eventRegisterFromSlug($slug: String!) {\\n  eventRegisterFromSlug(slug: $slug) {\\n    _id\\n    slug\\n    coverUrl\\n    startDate\\n    endDate\\n    liveLegacy\\n    website\\n    redirectTo\\n    hideDate\\n    testMode\\n    isSoldOut\\n    ticketsQuota {\\n      _id\\n      count\\n      limit\\n      __typename\\n    }\\n    description {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    location\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    slug\\n    isRegOpen\\n    periods {\\n      _id\\n      start\\n      end\\n      preRegisterStart\\n      preRegisterEnd\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      preRegister\\n      __typename\\n    }\\n    settings {\\n      _id\\n      registrationType {\\n        _id\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      registration {\\n        _id\\n        fee\\n        fields {\\n          _id\\n          name\\n          enabled\\n          required\\n          unique\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        enterNotice {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      participant {\\n        _id\\n        uniqueNationalId\\n        uniqueEmail\\n        fields {\\n          _id\\n          name\\n          enabled\\n          required\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          validations {\\n            _id\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      couponCode {\\n        _id\\n        enabled\\n        __typename\\n      }\\n      payment {\\n        _id\\n        priceSource\\n        __typename\\n      }\\n      ui {\\n        _id\\n        entryFee {\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    registrationTypes {\\n      _id\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      infoMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      privilegeKeys\\n      hidden\\n      price\\n      minParticipants\\n      maxParticipants\\n      restrictions\\n      couponCodeEnabled\\n      couponCodeRequired\\n      optionHidden\\n      periodIds\\n      ticketTypeIds\\n      productTypeIds\\n      order\\n      limitId\\n      deliveryOptions {\\n        _id\\n        enabled\\n        __typename\\n      }\\n      __typename\\n    }\\n    ticketQuestions {\\n      _id\\n      kind\\n      masterKind\\n      inputType\\n      default\\n      order\\n      required\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      infoMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      opts\\n      items {\\n        _id\\n        imageUrl\\n        value {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    productTypes {\\n      _id\\n      price\\n      deliveryOption\\n      deliveryPrice\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      questions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        infoMessage {\\n          en\\n          th\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    ticketTypes {\\n      _id\\n      group\\n      price\\n      deliveryOption\\n      deliveryPrice\\n      reserveNumber\\n      reservedNumbers\\n      shirtEnabled\\n      finisherShirtEnabled\\n      quantity\\n      periodId\\n      ageCategoryIds\\n      order\\n      shirtTypeIds\\n      shirtIds\\n      finisherShirtTypeIds\\n      finisherShirtIds\\n      hideOnFrontPage\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      participantFields {\\n        _id\\n        name\\n        enabled\\n        required\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        validations {\\n          type\\n          params\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      virtualBib {\\n        _id\\n        backgroundUrl\\n        fonts {\\n          _id\\n          fontFamily\\n          fontSrcUrl\\n          __typename\\n        }\\n        numberStyle {\\n          _id\\n          font\\n          textAlign\\n          fillStyle\\n          top\\n          left\\n          __typename\\n        }\\n        nameStyle {\\n          _id\\n          font\\n          textAlign\\n          fillStyle\\n          top\\n          left\\n          __typename\\n        }\\n        __typename\\n      }\\n      race {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        distance\\n        distanceUnit\\n        startTime\\n        ageCategoryDiff\\n        ageRangeStrict {\\n          male {\\n            min\\n            max\\n            __typename\\n          }\\n          female {\\n            min\\n            max\\n            __typename\\n          }\\n          __typename\\n        }\\n        ageCategories {\\n          gender\\n          min\\n          max\\n          __typename\\n        }\\n        __typename\\n      }\\n      questions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/Test-11/register',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"createRegistration","variables":{"record":{"eventId":"5f150eed8b3cb0c6d73f7a37","registrationTypeId":"5f150f678b3cb051de3f7a99","couponCodeIds":[]}},"query":"mutation createRegistration($record: RegistrationInput!) {\\n  registerEvent(record: $record) {\\n    recordId\\n    record {\\n      _id\\n      eventId\\n      registrationTypeId\\n      status\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/Test-11/register',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/Test-11/register',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"registration","variables":{"_id":"5f71b403e6fdebc19811f1bd"},"query":"query registration($_id: MongoID!, $checkStatus: Boolean) {\\n  registration(_id: $_id, checkStatus: $checkStatus) {\\n    _id\\n    code\\n    status\\n    expired\\n    expireAt\\n    paymentQuotaExceeded\\n    eventId\\n    testMode\\n    registrationTypeId\\n    userId\\n    invoice {\\n      type\\n      name\\n      taxId\\n      address\\n      __typename\\n    }\\n    privilege {\\n      _id\\n      profile {\\n        _id\\n        firstName\\n        lastName\\n        gender\\n        nationalId\\n        __typename\\n      }\\n      __typename\\n    }\\n    couponCodes {\\n      _id\\n      code\\n      couponCodeType {\\n        _id\\n        ticketTypeIds\\n        __typename\\n      }\\n      __typename\\n    }\\n    orderItems {\\n      _id\\n      productId\\n      masterType\\n      orderitemtypeId\\n      participant {\\n        _id\\n        profile {\\n          _id\\n          firstName\\n          lastName\\n          __typename\\n        }\\n        __typename\\n      }\\n      orderitemtype {\\n        _id\\n        name {\\n          en\\n          th\\n          __typename\\n        }\\n        price\\n        __typename\\n      }\\n      quantity\\n      product {\\n        _id\\n        imageUrl\\n        openorderitemtype\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        count {\\n          paid\\n          submitted\\n          total\\n          __typename\\n        }\\n        price\\n        description {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      options(sort: ORDER_ASC) {\\n        _id\\n        value\\n        order\\n        itemId\\n        itemIds\\n        shirtId\\n        shirtTypeId\\n        questionId\\n        question {\\n          _id\\n          kind\\n          order\\n          inputType\\n          shirtTypeIds\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    eventProducts {\\n      _id\\n      eventProductType {\\n        _id\\n        eventId\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        kind\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      registrationId\\n      productTypeId\\n      eventId\\n      couponCodeText\\n      couponCodeId\\n      kind\\n      options(sort: ORDER_ASC) {\\n        _id\\n        value\\n        order\\n        itemId\\n        itemIds\\n        shirtId\\n        shirtTypeId\\n        questionId\\n        question {\\n          _id\\n          kind\\n          default\\n          order\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    registrationType {\\n      _id\\n      hidden\\n      price\\n      minParticipants\\n      maxParticipants\\n      restrictions\\n      periodIds\\n      ticketTypeIds\\n      productTypeIds\\n      productIds\\n      requiredTicketTypeIds\\n      requiredTicketTypeMode\\n      limitId\\n      hideTicketTypePrice\\n      limitProduct\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      lotto {\\n        enabled\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        accepted {\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        rejected {\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      deliveryOptions {\\n        _id\\n        enabled\\n        conditionType\\n        basePrice\\n        itemsPerUnit\\n        pricePerUnit\\n        editStart\\n        editEnd\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        hidden\\n        __typename\\n      }\\n      __typename\\n    }\\n    amount {\\n      total\\n      discount\\n      discounted\\n      deliveryPrice\\n      __typename\\n    }\\n    itemsAmount {\\n      total\\n      discount\\n      discounted\\n      __typename\\n    }\\n    productAmount {\\n      fee\\n      amount\\n      payAmount\\n      __typename\\n    }\\n    event {\\n      _id\\n      slug\\n      serverDatetime\\n      regClosed\\n      startDate\\n      endDate\\n      testMode\\n      isSoldOut\\n      isVirtual\\n      organizerId\\n      organizer {\\n        _id\\n        name\\n        __typename\\n      }\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      ticketGroups {\\n        _id\\n        backgroundColor\\n        order\\n        hidden\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      isRegOpen\\n      invoiceEnabled\\n      productCount\\n      crossProductCount\\n      extraProductCount\\n      ticketsQuota {\\n        _id\\n        count\\n        limit\\n        __typename\\n      }\\n      reservedNumbersTaken\\n      periods {\\n        _id\\n        start\\n        end\\n        preRegisterStart\\n        preRegisterEnd\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        preRegister\\n        __typename\\n      }\\n      shirtTypeMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      shirtTypes {\\n        _id\\n        imageUrl\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      shirts {\\n        _id\\n        shirtTypeId\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        __typename\\n      }\\n      finisherShirtTypeMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      finisherShirtTypes {\\n        _id\\n        imageUrl\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      finisherShirts {\\n        _id\\n        shirtTypeId\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        __typename\\n      }\\n      shirtCounts {\\n        _id\\n        shirtTypeId\\n        quantity\\n        count\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticketTypeCount {\\n        _id\\n        count\\n        __typename\\n      }\\n      settings {\\n        _id\\n        virtualRun {\\n          _id\\n          distanceMode\\n          noEcer\\n          period {\\n            start\\n            end\\n            __typename\\n          }\\n          __typename\\n        }\\n        registration {\\n          _id\\n          fee\\n          maxOrders\\n          expireDate\\n          hideOrderBtn\\n          itemsGatewayFeesEnabled\\n          fields {\\n            _id\\n            name\\n            enabled\\n            required\\n            unique\\n            __typename\\n          }\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          cancelRequestButtonText {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          acceptCondition {\\n            enabled\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          uniqueNationalId\\n          uniqueEmail\\n          editStart\\n          editEnd\\n          fields {\\n            _id\\n            name\\n            enabled\\n            required\\n            extraMessage {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            validations {\\n              _id\\n              type\\n              params\\n              message {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticket {\\n          _id\\n          hideNumber\\n          numberDigits\\n          reservedNumbers\\n          limits {\\n            _id\\n            count\\n            __typename\\n          }\\n          virtualBibs {\\n            _id\\n            backgroundUrl\\n            fonts {\\n              _id\\n              fontFamily\\n              fontSrcUrl\\n              __typename\\n            }\\n            numberStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            nameStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        couponCode {\\n          _id\\n          enabled\\n          __typename\\n        }\\n        payment {\\n          _id\\n          priceSource\\n          bankAccountInfo\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          methods {\\n            method\\n            enabled\\n            publicKey\\n            __typename\\n          }\\n          gatewayFees {\\n            _id\\n            gateway\\n            fee\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      registrationTypes {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        price\\n        minParticipants\\n        maxParticipants\\n        restrictions\\n        periodIds\\n        hideTicketTypePrice\\n        ticketTypeIds\\n        productTypeIds\\n        order\\n        __typename\\n      }\\n      ticketQuestions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        shirtTypeIds\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        infoMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        condition {\\n          _id\\n          questionId\\n          operator\\n          value\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      productTypes {\\n        _id\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        questions {\\n          _id\\n          kind\\n          masterKind\\n          inputType\\n          shirtTypeIds\\n          default\\n          order\\n          required\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          infoMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          opts\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticketTypes {\\n        _id\\n        group\\n        groupId\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        reserveNumber\\n        reservedNumbers\\n        shirtEnabled\\n        finisherShirtEnabled\\n        quantity\\n        order\\n        imageUrl\\n        periodId\\n        ageCategoryIds\\n        limitId\\n        shirtTypeIds\\n        shirtIds\\n        finisherShirtTypeIds\\n        finisherShirtIds\\n        raceId\\n        raceIds\\n        nationalities\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        participantFields {\\n          _id\\n          name\\n          enabled\\n          required\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          validations {\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        settings {\\n          _id\\n          requirements {\\n            _id\\n            ticketTypes {\\n              _id\\n              ticketTypeIds\\n              count {\\n                minimum\\n                maximum\\n                __typename\\n              }\\n              ratio {\\n                minimum\\n                maximum\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        virtualBib {\\n          _id\\n          backgroundUrl\\n          fonts {\\n            _id\\n            fontFamily\\n            fontSrcUrl\\n            __typename\\n          }\\n          numberStyle {\\n            _id\\n            font\\n            textAlign\\n            fillStyle\\n            top\\n            left\\n            __typename\\n          }\\n          nameStyle {\\n            _id\\n            font\\n            textAlign\\n            fillStyle\\n            top\\n            left\\n            __typename\\n          }\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        race {\\n          _id\\n          slug\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          distance\\n          distanceUnit\\n          startTime\\n          ageCategoryDiff\\n          ageRangeStrict {\\n            male {\\n              min\\n              max\\n              __typename\\n            }\\n            female {\\n              min\\n              max\\n              __typename\\n            }\\n            __typename\\n          }\\n          ageCategories {\\n            _id\\n            min\\n            max\\n            gender\\n            __typename\\n          }\\n          __typename\\n        }\\n        questions {\\n          _id\\n          kind\\n          masterKind\\n          inputType\\n          shirtTypeIds\\n          default\\n          order\\n          required\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          infoMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          opts\\n          validations {\\n            _id\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          items {\\n            _id\\n            hidden\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    successfulPayment {\\n      _id\\n      amount\\n      payAmount\\n      method\\n      __typename\\n    }\\n    payment {\\n      _id\\n      amount\\n      payAmount\\n      method\\n      __typename\\n    }\\n    payments(sort: _ID_DESC, limit: 10) {\\n      _id\\n      eventId\\n      registrationId\\n      status\\n      amount\\n      payAmount\\n      method\\n      createdAt\\n      data\\n      __typename\\n    }\\n    participants {\\n      _id\\n      eventId\\n      registrationId\\n      userId\\n      order\\n      profile {\\n        _id\\n        type\\n        userId\\n        nameOnBib\\n        imageUrl\\n        firstName\\n        lastName\\n        email\\n        gender\\n        birthDate\\n        nationalId\\n        nationality\\n        telephone\\n        club\\n        healthIssues\\n        bloodType\\n        street\\n        locality\\n        city\\n        country\\n        province\\n        consent\\n        address {\\n          region\\n          locality\\n          country\\n          postalCode\\n          __typename\\n        }\\n        imageValidation {\\n          valid\\n          errors\\n          __typename\\n        }\\n        taxInvoice {\\n          type\\n          taxId\\n          address\\n          name\\n          __typename\\n        }\\n        receipt {\\n          type\\n          taxId\\n          address\\n          name\\n          __typename\\n        }\\n        emergencyContact {\\n          name\\n          relationship\\n          phone\\n          __typename\\n        }\\n        __typename\\n      }\\n      tickets {\\n        _id\\n        kind\\n        reservedNumber\\n        number\\n        eventCode\\n        productTypeId\\n        eventId\\n        registrationId\\n        participantId\\n        nameOnBib\\n        couponCodeText\\n        couponCodeId\\n        shirtTypeId\\n        shirtId\\n        finisherShirtTypeId\\n        finisherShirtId\\n        delivery\\n        trackingCode\\n        cancelled\\n        deliverTo {\\n          recipient\\n          street\\n          locality\\n          city\\n          region\\n          postalCode\\n          __typename\\n        }\\n        couponCode {\\n          _id\\n          code\\n          couponCodeType {\\n            _id\\n            ticketTypeIds\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            discount\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticketType {\\n          _id\\n          shirtEnabled\\n          finisherShirtEnabled\\n          quantity\\n          price\\n          group\\n          groupId\\n          questions {\\n            _id\\n            kind\\n            masterKind\\n            inputType\\n            default\\n            order\\n            required\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            opts\\n            items {\\n              _id\\n              imageUrl\\n              value {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          settings {\\n            _id\\n            virtualRun {\\n              _id\\n              distanceMode\\n              noEcer\\n              period {\\n                start\\n                end\\n                __typename\\n              }\\n              __typename\\n            }\\n            refundRequest {\\n              _id\\n              enabled\\n              options {\\n                _id\\n                amount\\n                name {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                period {\\n                  _id\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            cancelRequest {\\n              _id\\n              enabled\\n              methods {\\n                _id\\n                name {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                extraMessage {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                period {\\n                  _id\\n                  start\\n                  end\\n                  __typename\\n                }\\n                questions {\\n                  _id\\n                  order\\n                  kind\\n                  inputType\\n                  required\\n                  name {\\n                    en\\n                    th\\n                    zh\\n                    __typename\\n                  }\\n                  items {\\n                    _id\\n                    imageUrl\\n                    value {\\n                      en\\n                      th\\n                      zh\\n                      __typename\\n                    }\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            requirements {\\n              _id\\n              ticketTypes {\\n                _id\\n                ticketTypeIds\\n                count {\\n                  minimum\\n                  maximum\\n                  __typename\\n                }\\n                ratio {\\n                  minimum\\n                  maximum\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          participantFields {\\n            _id\\n            name\\n            enabled\\n            required\\n            extraMessage {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            validations {\\n              _id\\n              type\\n              params\\n              message {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          virtualBib {\\n            _id\\n            backgroundUrl\\n            nameField\\n            fonts {\\n              _id\\n              fontFamily\\n              fontSrcUrl\\n              __typename\\n            }\\n            numberStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            nameStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            __typename\\n          }\\n          race {\\n            _id\\n            slug\\n            distance\\n            hidden\\n            distanceUnit\\n            startTime\\n            ageCategoryDiff\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            ageRangeStrict {\\n              male {\\n                min\\n                max\\n                __typename\\n              }\\n              female {\\n                min\\n                max\\n                __typename\\n              }\\n              __typename\\n            }\\n            ageCategories {\\n              min\\n              max\\n              gender\\n              _id\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          races {\\n            _id\\n            slug\\n            hidden\\n            distanceUnit\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                fields {\\n                  _id\\n                  enabled\\n                  required\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        options(sort: ORDER_ASC) {\\n          _id\\n          value\\n          order\\n          itemId\\n          itemIds\\n          shirtId\\n          shirtTypeId\\n          questionId\\n          question {\\n            _id\\n            kind\\n            inputType\\n            shirtTypeIds\\n            order\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            condition {\\n              _id\\n              questionId\\n              operator\\n              value\\n              __typename\\n            }\\n            items {\\n              _id\\n              imageUrl\\n              value {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      runs {\\n        _id\\n        distance\\n        donationAmount\\n        eventId\\n        ticketItemId\\n        participantId\\n        userId\\n        raceId\\n        runnerImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        activityImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    orders {\\n      _id\\n      code\\n      status\\n      expireAt\\n      eventId\\n      registrationId\\n      amount {\\n        total\\n        discount\\n        discounted\\n        __typename\\n      }\\n      __typename\\n    }\\n    deliveryAddress {\\n      _id\\n      fullname\\n      telephone\\n      street\\n      locality\\n      city\\n      province\\n      country\\n      postalCode\\n      __typename\\n    }\\n    refundRequests {\\n      _id\\n      ticketItemId\\n      status\\n      method\\n      remarks\\n      createdAt\\n      optionId\\n      ticket {\\n        _id\\n        number\\n        cancelled\\n        ticketType {\\n          _id\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          profile {\\n            _id\\n            firstName\\n            lastName\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      option {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      data {\\n        transfer {\\n          bankAccount {\\n            brand\\n            name\\n            number\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      refund {\\n        _id\\n        completedAt\\n        amount\\n        data {\\n          transfer {\\n            slipUrl\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    cancelRequests {\\n      _id\\n      ticketItemId\\n      status\\n      remarks\\n      createdAt\\n      refundAmount\\n      options {\\n        _id\\n        value\\n        itemId\\n        itemIds\\n        question {\\n          _id\\n          kind\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticket {\\n        _id\\n        number\\n        cancelled\\n        ticketType {\\n          _id\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          profile {\\n            _id\\n            firstName\\n            lastName\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      method {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      response {\\n        _id\\n        attachmentUrl\\n        remarks\\n        completedAt\\n        __typename\\n      }\\n      __typename\\n    }\\n    deliveryOptionId\\n    __typename\\n  }\\n  campaigns {\\n    _id\\n    name {\\n      th\\n      en\\n      zh\\n      __typename\\n    }\\n    paymentMethod\\n    start\\n    end\\n    percentageDiscount\\n    discount\\n    maxDiscount\\n    published\\n    deleted\\n    createdAt\\n    updatedAt\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer:
            'https://race.phuket.run/reg/preview/5f71b403e6fdebc19811f1bd?pId=new',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"setRegistrationDeliveryOptionId","variables":{"_id":"5f71b403e6fdebc19811f1bd","deliveryOptionId":"5f3f4bab60e2e72f43413db9"},"query":"mutation setRegistrationDeliveryOptionId($_id: MongoID, $deliveryOptionId: String) {\\n  setRegistrationDeliveryOptionId(_id: $_id, deliveryOptionId: $deliveryOptionId) {\\n    _id\\n    deliveryOptionId\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer:
            'https://race.phuket.run/reg/preview/5f71b403e6fdebc19811f1bd?pId=new',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"registration","variables":{"_id":"5f71b403e6fdebc19811f1bd"},"query":"query registration($_id: MongoID!, $checkStatus: Boolean) {\\n  registration(_id: $_id, checkStatus: $checkStatus) {\\n    _id\\n    code\\n    status\\n    expired\\n    expireAt\\n    paymentQuotaExceeded\\n    eventId\\n    testMode\\n    registrationTypeId\\n    userId\\n    invoice {\\n      type\\n      name\\n      taxId\\n      address\\n      __typename\\n    }\\n    privilege {\\n      _id\\n      profile {\\n        _id\\n        firstName\\n        lastName\\n        gender\\n        nationalId\\n        __typename\\n      }\\n      __typename\\n    }\\n    couponCodes {\\n      _id\\n      code\\n      couponCodeType {\\n        _id\\n        ticketTypeIds\\n        __typename\\n      }\\n      __typename\\n    }\\n    orderItems {\\n      _id\\n      productId\\n      masterType\\n      orderitemtypeId\\n      participant {\\n        _id\\n        profile {\\n          _id\\n          firstName\\n          lastName\\n          __typename\\n        }\\n        __typename\\n      }\\n      orderitemtype {\\n        _id\\n        name {\\n          en\\n          th\\n          __typename\\n        }\\n        price\\n        __typename\\n      }\\n      quantity\\n      product {\\n        _id\\n        imageUrl\\n        openorderitemtype\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        count {\\n          paid\\n          submitted\\n          total\\n          __typename\\n        }\\n        price\\n        description {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      options(sort: ORDER_ASC) {\\n        _id\\n        value\\n        order\\n        itemId\\n        itemIds\\n        shirtId\\n        shirtTypeId\\n        questionId\\n        question {\\n          _id\\n          kind\\n          order\\n          inputType\\n          shirtTypeIds\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    eventProducts {\\n      _id\\n      eventProductType {\\n        _id\\n        eventId\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        kind\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      registrationId\\n      productTypeId\\n      eventId\\n      couponCodeText\\n      couponCodeId\\n      kind\\n      options(sort: ORDER_ASC) {\\n        _id\\n        value\\n        order\\n        itemId\\n        itemIds\\n        shirtId\\n        shirtTypeId\\n        questionId\\n        question {\\n          _id\\n          kind\\n          default\\n          order\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    registrationType {\\n      _id\\n      hidden\\n      price\\n      minParticipants\\n      maxParticipants\\n      restrictions\\n      periodIds\\n      ticketTypeIds\\n      productTypeIds\\n      productIds\\n      requiredTicketTypeIds\\n      requiredTicketTypeMode\\n      limitId\\n      hideTicketTypePrice\\n      limitProduct\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      lotto {\\n        enabled\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        accepted {\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        rejected {\\n          message {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      deliveryOptions {\\n        _id\\n        enabled\\n        conditionType\\n        basePrice\\n        itemsPerUnit\\n        pricePerUnit\\n        editStart\\n        editEnd\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        hidden\\n        __typename\\n      }\\n      __typename\\n    }\\n    amount {\\n      total\\n      discount\\n      discounted\\n      deliveryPrice\\n      __typename\\n    }\\n    itemsAmount {\\n      total\\n      discount\\n      discounted\\n      __typename\\n    }\\n    productAmount {\\n      fee\\n      amount\\n      payAmount\\n      __typename\\n    }\\n    event {\\n      _id\\n      slug\\n      serverDatetime\\n      regClosed\\n      startDate\\n      endDate\\n      testMode\\n      isSoldOut\\n      isVirtual\\n      organizerId\\n      organizer {\\n        _id\\n        name\\n        __typename\\n      }\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      ticketGroups {\\n        _id\\n        backgroundColor\\n        order\\n        hidden\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      isRegOpen\\n      invoiceEnabled\\n      productCount\\n      crossProductCount\\n      extraProductCount\\n      ticketsQuota {\\n        _id\\n        count\\n        limit\\n        __typename\\n      }\\n      reservedNumbersTaken\\n      periods {\\n        _id\\n        start\\n        end\\n        preRegisterStart\\n        preRegisterEnd\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        preRegister\\n        __typename\\n      }\\n      shirtTypeMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      shirtTypes {\\n        _id\\n        imageUrl\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      shirts {\\n        _id\\n        shirtTypeId\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        __typename\\n      }\\n      finisherShirtTypeMessage {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      finisherShirtTypes {\\n        _id\\n        imageUrl\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      finisherShirts {\\n        _id\\n        shirtTypeId\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        quantity\\n        __typename\\n      }\\n      shirtCounts {\\n        _id\\n        shirtTypeId\\n        quantity\\n        count\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticketTypeCount {\\n        _id\\n        count\\n        __typename\\n      }\\n      settings {\\n        _id\\n        virtualRun {\\n          _id\\n          distanceMode\\n          noEcer\\n          period {\\n            start\\n            end\\n            __typename\\n          }\\n          __typename\\n        }\\n        registration {\\n          _id\\n          fee\\n          maxOrders\\n          expireDate\\n          hideOrderBtn\\n          itemsGatewayFeesEnabled\\n          fields {\\n            _id\\n            name\\n            enabled\\n            required\\n            unique\\n            __typename\\n          }\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          cancelRequestButtonText {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          acceptCondition {\\n            enabled\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          uniqueNationalId\\n          uniqueEmail\\n          editStart\\n          editEnd\\n          fields {\\n            _id\\n            name\\n            enabled\\n            required\\n            extraMessage {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            validations {\\n              _id\\n              type\\n              params\\n              message {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticket {\\n          _id\\n          hideNumber\\n          numberDigits\\n          reservedNumbers\\n          limits {\\n            _id\\n            count\\n            __typename\\n          }\\n          virtualBibs {\\n            _id\\n            backgroundUrl\\n            fonts {\\n              _id\\n              fontFamily\\n              fontSrcUrl\\n              __typename\\n            }\\n            numberStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            nameStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        couponCode {\\n          _id\\n          enabled\\n          __typename\\n        }\\n        payment {\\n          _id\\n          priceSource\\n          bankAccountInfo\\n          customMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          methods {\\n            method\\n            enabled\\n            publicKey\\n            __typename\\n          }\\n          gatewayFees {\\n            _id\\n            gateway\\n            fee\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      registrationTypes {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        price\\n        minParticipants\\n        maxParticipants\\n        restrictions\\n        periodIds\\n        hideTicketTypePrice\\n        ticketTypeIds\\n        productTypeIds\\n        order\\n        __typename\\n      }\\n      ticketQuestions {\\n        _id\\n        kind\\n        masterKind\\n        inputType\\n        shirtTypeIds\\n        default\\n        order\\n        required\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        infoMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        condition {\\n          _id\\n          questionId\\n          operator\\n          value\\n          __typename\\n        }\\n        opts\\n        items {\\n          _id\\n          imageUrl\\n          value {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      productTypes {\\n        _id\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        questions {\\n          _id\\n          kind\\n          masterKind\\n          inputType\\n          shirtTypeIds\\n          default\\n          order\\n          required\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          infoMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          opts\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticketTypes {\\n        _id\\n        group\\n        groupId\\n        price\\n        deliveryOption\\n        deliveryPrice\\n        reserveNumber\\n        reservedNumbers\\n        shirtEnabled\\n        finisherShirtEnabled\\n        quantity\\n        order\\n        imageUrl\\n        periodId\\n        ageCategoryIds\\n        limitId\\n        shirtTypeIds\\n        shirtIds\\n        finisherShirtTypeIds\\n        finisherShirtIds\\n        raceId\\n        raceIds\\n        nationalities\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        extraMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        participantFields {\\n          _id\\n          name\\n          enabled\\n          required\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          validations {\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        settings {\\n          _id\\n          requirements {\\n            _id\\n            ticketTypes {\\n              _id\\n              ticketTypeIds\\n              count {\\n                minimum\\n                maximum\\n                __typename\\n              }\\n              ratio {\\n                minimum\\n                maximum\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        virtualBib {\\n          _id\\n          backgroundUrl\\n          fonts {\\n            _id\\n            fontFamily\\n            fontSrcUrl\\n            __typename\\n          }\\n          numberStyle {\\n            _id\\n            font\\n            textAlign\\n            fillStyle\\n            top\\n            left\\n            __typename\\n          }\\n          nameStyle {\\n            _id\\n            font\\n            textAlign\\n            fillStyle\\n            top\\n            left\\n            __typename\\n          }\\n          __typename\\n        }\\n        customMessage {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        race {\\n          _id\\n          slug\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          distance\\n          distanceUnit\\n          startTime\\n          ageCategoryDiff\\n          ageRangeStrict {\\n            male {\\n              min\\n              max\\n              __typename\\n            }\\n            female {\\n              min\\n              max\\n              __typename\\n            }\\n            __typename\\n          }\\n          ageCategories {\\n            _id\\n            min\\n            max\\n            gender\\n            __typename\\n          }\\n          __typename\\n        }\\n        questions {\\n          _id\\n          kind\\n          masterKind\\n          inputType\\n          shirtTypeIds\\n          default\\n          order\\n          required\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          infoMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          extraMessage {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          condition {\\n            _id\\n            questionId\\n            operator\\n            value\\n            __typename\\n          }\\n          opts\\n          validations {\\n            _id\\n            type\\n            params\\n            message {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          items {\\n            _id\\n            hidden\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    successfulPayment {\\n      _id\\n      amount\\n      payAmount\\n      method\\n      __typename\\n    }\\n    payment {\\n      _id\\n      amount\\n      payAmount\\n      method\\n      __typename\\n    }\\n    payments(sort: _ID_DESC, limit: 10) {\\n      _id\\n      eventId\\n      registrationId\\n      status\\n      amount\\n      payAmount\\n      method\\n      createdAt\\n      data\\n      __typename\\n    }\\n    participants {\\n      _id\\n      eventId\\n      registrationId\\n      userId\\n      order\\n      profile {\\n        _id\\n        type\\n        userId\\n        nameOnBib\\n        imageUrl\\n        firstName\\n        lastName\\n        email\\n        gender\\n        birthDate\\n        nationalId\\n        nationality\\n        telephone\\n        club\\n        healthIssues\\n        bloodType\\n        street\\n        locality\\n        city\\n        country\\n        province\\n        consent\\n        address {\\n          region\\n          locality\\n          country\\n          postalCode\\n          __typename\\n        }\\n        imageValidation {\\n          valid\\n          errors\\n          __typename\\n        }\\n        taxInvoice {\\n          type\\n          taxId\\n          address\\n          name\\n          __typename\\n        }\\n        receipt {\\n          type\\n          taxId\\n          address\\n          name\\n          __typename\\n        }\\n        emergencyContact {\\n          name\\n          relationship\\n          phone\\n          __typename\\n        }\\n        __typename\\n      }\\n      tickets {\\n        _id\\n        kind\\n        reservedNumber\\n        number\\n        eventCode\\n        productTypeId\\n        eventId\\n        registrationId\\n        participantId\\n        nameOnBib\\n        couponCodeText\\n        couponCodeId\\n        shirtTypeId\\n        shirtId\\n        finisherShirtTypeId\\n        finisherShirtId\\n        delivery\\n        trackingCode\\n        cancelled\\n        deliverTo {\\n          recipient\\n          street\\n          locality\\n          city\\n          region\\n          postalCode\\n          __typename\\n        }\\n        couponCode {\\n          _id\\n          code\\n          couponCodeType {\\n            _id\\n            ticketTypeIds\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            discount\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticketType {\\n          _id\\n          shirtEnabled\\n          finisherShirtEnabled\\n          quantity\\n          price\\n          group\\n          groupId\\n          questions {\\n            _id\\n            kind\\n            masterKind\\n            inputType\\n            default\\n            order\\n            required\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            opts\\n            items {\\n              _id\\n              imageUrl\\n              value {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          settings {\\n            _id\\n            virtualRun {\\n              _id\\n              distanceMode\\n              noEcer\\n              period {\\n                start\\n                end\\n                __typename\\n              }\\n              __typename\\n            }\\n            refundRequest {\\n              _id\\n              enabled\\n              options {\\n                _id\\n                amount\\n                name {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                period {\\n                  _id\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            cancelRequest {\\n              _id\\n              enabled\\n              methods {\\n                _id\\n                name {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                extraMessage {\\n                  en\\n                  th\\n                  zh\\n                  __typename\\n                }\\n                period {\\n                  _id\\n                  start\\n                  end\\n                  __typename\\n                }\\n                questions {\\n                  _id\\n                  order\\n                  kind\\n                  inputType\\n                  required\\n                  name {\\n                    en\\n                    th\\n                    zh\\n                    __typename\\n                  }\\n                  items {\\n                    _id\\n                    imageUrl\\n                    value {\\n                      en\\n                      th\\n                      zh\\n                      __typename\\n                    }\\n                    __typename\\n                  }\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            requirements {\\n              _id\\n              ticketTypes {\\n                _id\\n                ticketTypeIds\\n                count {\\n                  minimum\\n                  maximum\\n                  __typename\\n                }\\n                ratio {\\n                  minimum\\n                  maximum\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          participantFields {\\n            _id\\n            name\\n            enabled\\n            required\\n            extraMessage {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            validations {\\n              _id\\n              type\\n              params\\n              message {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          virtualBib {\\n            _id\\n            backgroundUrl\\n            nameField\\n            fonts {\\n              _id\\n              fontFamily\\n              fontSrcUrl\\n              __typename\\n            }\\n            numberStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            nameStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            __typename\\n          }\\n          race {\\n            _id\\n            slug\\n            distance\\n            hidden\\n            distanceUnit\\n            startTime\\n            ageCategoryDiff\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            ageRangeStrict {\\n              male {\\n                min\\n                max\\n                __typename\\n              }\\n              female {\\n                min\\n                max\\n                __typename\\n              }\\n              __typename\\n            }\\n            ageCategories {\\n              min\\n              max\\n              gender\\n              _id\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          races {\\n            _id\\n            slug\\n            hidden\\n            distanceUnit\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                fields {\\n                  _id\\n                  enabled\\n                  required\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        options(sort: ORDER_ASC) {\\n          _id\\n          value\\n          order\\n          itemId\\n          itemIds\\n          shirtId\\n          shirtTypeId\\n          questionId\\n          question {\\n            _id\\n            kind\\n            inputType\\n            shirtTypeIds\\n            order\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            condition {\\n              _id\\n              questionId\\n              operator\\n              value\\n              __typename\\n            }\\n            items {\\n              _id\\n              imageUrl\\n              value {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      runs {\\n        _id\\n        distance\\n        donationAmount\\n        eventId\\n        ticketItemId\\n        participantId\\n        userId\\n        raceId\\n        runnerImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        activityImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    orders {\\n      _id\\n      code\\n      status\\n      expireAt\\n      eventId\\n      registrationId\\n      amount {\\n        total\\n        discount\\n        discounted\\n        __typename\\n      }\\n      __typename\\n    }\\n    deliveryAddress {\\n      _id\\n      fullname\\n      telephone\\n      street\\n      locality\\n      city\\n      province\\n      country\\n      postalCode\\n      __typename\\n    }\\n    refundRequests {\\n      _id\\n      ticketItemId\\n      status\\n      method\\n      remarks\\n      createdAt\\n      optionId\\n      ticket {\\n        _id\\n        number\\n        cancelled\\n        ticketType {\\n          _id\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          profile {\\n            _id\\n            firstName\\n            lastName\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      option {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      data {\\n        transfer {\\n          bankAccount {\\n            brand\\n            name\\n            number\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      refund {\\n        _id\\n        completedAt\\n        amount\\n        data {\\n          transfer {\\n            slipUrl\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    cancelRequests {\\n      _id\\n      ticketItemId\\n      status\\n      remarks\\n      createdAt\\n      refundAmount\\n      options {\\n        _id\\n        value\\n        itemId\\n        itemIds\\n        question {\\n          _id\\n          kind\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          items {\\n            _id\\n            imageUrl\\n            value {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      ticket {\\n        _id\\n        number\\n        cancelled\\n        ticketType {\\n          _id\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          __typename\\n        }\\n        participant {\\n          _id\\n          profile {\\n            _id\\n            firstName\\n            lastName\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      method {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        __typename\\n      }\\n      response {\\n        _id\\n        attachmentUrl\\n        remarks\\n        completedAt\\n        __typename\\n      }\\n      __typename\\n    }\\n    deliveryOptionId\\n    __typename\\n  }\\n  campaigns {\\n    _id\\n    name {\\n      th\\n      en\\n      zh\\n      __typename\\n    }\\n    paymentMethod\\n    start\\n    end\\n    percentageDiscount\\n    discount\\n    maxDiscount\\n    published\\n    deleted\\n    createdAt\\n    updatedAt\\n    __typename\\n  }\\n}\\n"},{"operationName":"profiles","variables":{},"query":"query profiles {\\n  profiles(sort: UPDATEDAT_DESC) {\\n    _id\\n    type\\n    userId\\n    imageUrl\\n    firstName\\n    lastName\\n    nameOnBib\\n    email\\n    gender\\n    birthDate\\n    nationalId\\n    nationality\\n    telephone\\n    club\\n    healthIssues\\n    bloodType\\n    street\\n    locality\\n    city\\n    country\\n    province\\n    consent\\n    updatedAt\\n    address {\\n      region\\n      locality\\n      country\\n      postalCode\\n      __typename\\n    }\\n    taxInvoice {\\n      type\\n      taxId\\n      address\\n      name\\n      __typename\\n    }\\n    receipt {\\n      type\\n      taxId\\n      address\\n      name\\n      __typename\\n    }\\n    emergencyContact {\\n      name\\n      relationship\\n      phone\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer:
            'https://race.phuket.run/reg/preview/5f71b403e6fdebc19811f1bd?pId=new',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )
  })

  group('page_3 - https://race.phuket.run/', function () {
    response = http.get('https://race.phuket.run/', {
      headers: {
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
        'if-none-match':
          '"7e4e847ddc452eace1bd5ae5e7f82e71862c7a78f308bcd429668ffbaadc682e-br"',
        'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
      }
    })

    response = http.get('https://browser.sentry-cdn.com/5.6.3/bundle.min.js', {
      headers: {
        Origin: 'https://race.phuket.run',
        Referer: 'https://race.phuket.run/',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.get(
      'https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=default%2Ces6%2CWeakMap%2CArray.prototype.includes%2CObject.values%2CObject.entries%2CIntl%2CHTMLCanvasElement.prototype.toBlob%2CHTMLCanvasElement.prototype.toDataUrl%2CXMLHttpRequest%2CObject.setPrototypeOf%2CObject.keys%2CObject.assign&features=default%252Ces6%252CWeakMap%252CArray.prototype.includes%252CObject.values%252CObject.entries%252CIntl%252CHTMLCanvasElement.prototype.toBlob%252CHTMLCanvasElement.prototype.toDataUrl%252CXMLHttpRequest%252CObject.setPrototypeOf%252CObject.keys%252CObject.assign',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/7.a62fa1b7.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"51038e73d0b69415658679e0d6cbb23d37addba7df9124811b0f4106703f48a5-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"4d1083c842256f6bea792bf1597a4fa64bd47fccb04885fdebc47e7560c1f43c-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/7.7921c5d3.chunk.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'if-none-match':
            '"a524dc48db480ac0486c382a865eb9583a5257507ef61e46d05c0fd1b2934638-br"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/main.32d565ee.chunk.js',
      {
        headers: {
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'if-none-match':
            '"bef9d342a587676946f40a6ce9ffab44253a08a738005424b7bc77734f423405-br"',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
        }
      }
    )

    response = http.get(
      'https://fonts.googleapis.com/icon?family=Material+Icons&family=Material%2BIcons',
      {
        headers: {
          Referer: 'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.googleapis.com/css?family=Kanit%3A200%2C300%2C400%2C500%2C600%2C700%2C800%2C900',
      {
        headers: {
          Referer: 'https://race.phuket.run/static/css/main.8862f4a2.chunk.css',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5aOhWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCYdA.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwA.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWzVaF5NQ.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWnVaE.woff2',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer:
            'https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,600,700,800,900',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get('https://www.google-analytics.com/analytics.js', {
      headers: {
        Referer: 'https://race.phuket.run/',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"currentUserQuery","variables":{},"query":"query currentUserQuery {\\n  currentUser {\\n    _id\\n    email\\n    profile {\\n      _id\\n      imageUrl\\n      firstName\\n      lastName\\n      birthDate\\n      nationalId\\n      nationality\\n      gender\\n      telephone\\n      __typename\\n    }\\n    achievements {\\n      _id\\n      reward {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        type\\n        badge {\\n          completed\\n          __typename\\n        }\\n        __typename\\n      }\\n      createdAt\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.get('https://race.phuket.run/manifest.json', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: '*/*',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        'if-none-match':
          '"3d55a8df77aa00c3f9bfe28de7545ae467fd5707d6146ede7708e3a336802346-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/favicon.ico', {
      headers: {
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get('https://race.phuket.run/logothairun-(W).png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'if-none-match':
          '"b707df1b2e1d4d568d8636e4cacccc32375da149643289ac55b91a626e69656b-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/js/4.d37f87fe.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"29a2018f2e205b679d181137b21ff7d14cb9d44df80578dc9df01b8b256518f2-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 05:27:01 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/9.5cce5eb0.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"82e07554cbed37d965a85a802bbc4a68d7fb9c1a78efd3f84654f5db5576cab8-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/9.f2987607.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"197065bb759cd85fcf30542bf2838ac90b59bf57dc723724e61687f9be7c5c2c-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/16.37001907.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"b26904374a483cc87bf3b0ca23fd6c25eee9ef463251ae7c8544b0f2398392d7-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/16.32876527.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'if-none-match':
            '"ac1a78e27bd15b9581fc024dbe520d34be63309aa077baa73e6115370d617559-br"',
          'if-modified-since': 'Mon, 28 Sep 2020 07:12:16 GMT'
        }
      }
    )

    response = http.get('https://race.phuket.run/facebook.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"80cba0d1e660e5e4857fc32f85c02c8ca380032589021caccee801ad4653ebfa-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get('https://race.phuket.run/messenger.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"d629a433b204c36e7675b7623600aa1f1e4bc62e80cdea854fcc202a086321ea-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get(
      'https://race.phuket.run/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%81-02.png',
      {
        headers: {
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'if-none-match':
            '"7b3045883edd528e7cb04d0ee97639bb0dc2d48ef731200d5f46cb2c28c9996f"',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":true}}},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    thumbnailMobileUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.get('https://race.phuket.run/sport%20(2).png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'if-none-match':
          '"3a1bff6bb6743bb3838f212bd4c6f613194a9a24df63aab54f25d85a62e5f96f-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get('https://race.phuket.run/icon_option-b.png', {
      headers: {
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        'if-none-match':
          '"45412668c57e95ef2a0bd7a1998cebdc1358270a1f3e17e3a218e6c0926e118c-br"',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU'
      }
    })

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/4f014d11-4344-4c7b-80d4-cb8fe3815939.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/7ea4ad51-afc9-4723-96ed-56fbbf4e7d97.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/b68a06a3-b450-463b-9f5d-1a26cc9de269.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/5d2d0c2f-657d-429c-b4fb-7fdc068d52a6.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/125bb828-a5f6-4087-84ab-ee7fd3ce2609.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ae0b0338-7eb7-41ef-b18c-6ddfdcdabb8e.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/d1079612-7113-4360-8c18-63f8fae949ae.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/9cd21e02-360c-43d4-9250-31c4359b3ba7.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/8b3e3cb0-64a6-4fe2-98c0-c104694b6845.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/1802c809-83a2-40f7-acb1-70025560af70.png',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/5a4bbb9a-ffbf-4b99-ab17-170095009850.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/BS10/cover/Cover-VIP.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ed037b55-c3fc-4794-bbde-84d81a5dd63b.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/25f190a1-9a69-4d16-912d-5683d3cc8a0a.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/1c2b94ff-4af6-457d-b12d-becf00836cd3.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/181f06dc-9c0c-4f50-88fb-bee7d059dec7.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/51272759-8dec-405b-aab1-336fe40afe4c.jpeg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/MVRBS21/theme.jpg',
      {
        headers: {
          Referer: 'https://race.phuket.run/',
          'User-Agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":false}},"limit":20},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    thumbnailMobileUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.get('https://race.phuket.run/user.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
        'if-none-match':
          '"2ea4ba7d0a27e1d79926feb6fe3a3b6b6fe14c5e5d44db7365bbdf847fc2168e-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/FacebookNew.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
        'if-none-match':
          '"3b81d506ba30034e5f3080d0f9233c7cc08b828669f82a8fc2da268386f323b0-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.options('https://api.race.phuket.run/auth/register', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/auth/register',
      '{"profile":{"firstName":"user6","lastName":"user6","gender":"male","birthDate":"1997-07-09","nationality":"ไทย"},"email":"user6@mail.com","password":"password"}',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          accept: '*/*',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/auth/login',
      '{"email":"user6@mail.com","password":"password"}',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          accept: '*/*',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AUsKjzOjLBsyZ4vVM72122KPc8BboLPMv.vVfCYiDcwQjeMgMGRG5qU5JKwdNPhw69eAIpvLfQQIU',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/auth/login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"currentUser","variables":{},"query":"query currentUser {\\n  currentUser {\\n    _id\\n    email\\n    profile {\\n      _id\\n      imageUrl\\n      firstName\\n      lastName\\n      birthDate\\n      gender\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
      {
        headers: {
          accept: '*/*',
          'x-thairun-client-id': 'race.phuket.run',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          'content-type': 'application/json',
          origin: 'https://race.phuket.run',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3ApU0Xl7mbSdx6UF-rw45T2EIqE7uz8xt0.jjUBztSq9UF6f9Q0z4xLdc%2BrpnC6Q%2F2RSgIbwyOfB%2F8',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.options('https://api.race.phuket.run/graphql', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type,x-thairun-client-id',
        origin: 'https://race.phuket.run',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        referer: 'https://race.phuket.run/',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6'
      }
    })
  })

  // Automatically added sleep
  sleep(1)
}
