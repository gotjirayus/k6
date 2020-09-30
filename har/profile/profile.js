// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main () {
  let response

  group('page_1 - https://race.phuket.run/dashboard', function () {
    response = http.get('https://race.phuket.run/dashboard', {
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
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
        'if-none-match':
          '"945cff6038c2fa424cbd2c96ccf896bc8e8307eaf38b51bc3fe52ef9a7cb75ae-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://browser.sentry-cdn.com/5.6.3/bundle.min.js', {
      headers: {
        Origin: 'https://race.phuket.run',
        Referer: 'https://race.phuket.run/dashboard',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.get(
      'https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=default%2Ces6%2CWeakMap%2CArray.prototype.includes%2CObject.values%2CObject.entries%2CIntl%2CHTMLCanvasElement.prototype.toBlob%2CHTMLCanvasElement.prototype.toDataUrl%2CXMLHttpRequest%2CObject.setPrototypeOf%2CObject.keys%2CObject.assign&features=default%252Ces6%252CWeakMap%252CArray.prototype.includes%252CObject.values%252CObject.entries%252CIntl%252CHTMLCanvasElement.prototype.toBlob%252CHTMLCanvasElement.prototype.toDataUrl%252CXMLHttpRequest%252CObject.setPrototypeOf%252CObject.keys%252CObject.assign',
      {
        headers: {
          Origin: 'https://race.phuket.run',
          Referer: 'https://race.phuket.run/dashboard',
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
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"4d1083c842256f6bea792bf1597a4fa64bd47fccb04885fdebc47e7560c1f43c-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/7.c7b14f24.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"038fdcfea25f5acfc791500071a2deaf05daef1351b48949946814d7627541c7-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/main.1dd70a5f.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"7b654d64e8aad10ace2ef6533b62046f031e964737f61d9e0efe262be41593ce-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWnVaFrNlJz.woff2',
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
        Referer: 'https://race.phuket.run/dashboard',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36'
      }
    })

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwCKd6xB.woff2',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
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
        referer: 'https://race.phuket.run/dashboard',
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
        referer: 'https://race.phuket.run/dashboard',
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
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/dashboard',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/css/0.08d9b104.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"bf435d1aa0097e41c2e1b1f6e3d3529252de30b8e69067bf6e35744c03688ab8-br"',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"65aec48384144f304d0c37b13e3bbd12598a32d354ccddccae77cabbcf69b829-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/4.0fe7d48d.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"13f9dc4fe9c36dd508b3d4e93d6d89d2a688dc81d8fe7831933cb99407209fad-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/15.9f05ede3.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"a1a7bb1d98b04ca3797c618312a41bcd22c9b9c40bd1d5e3e11206f275ed5bac-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/15.49b2013b.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"0fa80a4069e5b10e85a4f5a2d0e2fa379831b887d64ce589a6fcb5639bdcbb80-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/css/23.38184466.chunk.css',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"724af1c3864058e43bec928ac73551329a9c1e342fbe231c4d8ed7ae7aa29a52-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/23.63864371.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'if-none-match':
            '"94e707181ae212b8273e85a937d276b214fb07abbf32ce8fbee03420d1d352fd-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCKd6xBDFs.woff2',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWnVaFrNlJz.woff2',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5aOhWnVaFrNlJz.woff2',
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

    response = http.get('https://race.phuket.run/logothairun-(W).png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/dashboard',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
        'if-none-match':
          '"b707df1b2e1d4d568d8636e4cacccc32375da149643289ac55b91a626e69656b-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/facebook.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/dashboard',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
        'if-none-match':
          '"80cba0d1e660e5e4857fc32f85c02c8ca380032589021caccee801ad4653ebfa-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/messenger.png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/dashboard',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
        'if-none-match':
          '"d629a433b204c36e7675b7623600aa1f1e4bc62e80cdea854fcc202a086321ea-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"registrations","variables":{"sort":"_ID_DESC","filter":{"_operators":{"status":{"in":["paid","draft","submitted","payment_verifying","accepted","rejected"]}}},"limit":15},"query":"query registrations($sort: SortFindManyRegistrationInput, $filter: FilterFindManyRegistrationInput, $limit: Int, $skip: Int) {\\n  registrations(sort: $sort, filter: $filter, limit: $limit, skip: $skip) {\\n    _id\\n    code\\n    status\\n    expired\\n    expireAt\\n    eventId\\n    testMode\\n    createdAt\\n    messages {\\n      _id\\n      registrationId\\n      text\\n      type\\n      createdAt\\n      __typename\\n    }\\n    amount {\\n      total\\n      discount\\n      discounted\\n      __typename\\n    }\\n    itemsAmount {\\n      total\\n      discount\\n      discounted\\n      __typename\\n    }\\n    payment {\\n      _id\\n      payAmount\\n      __typename\\n    }\\n    event {\\n      _id\\n      startDate\\n      slug\\n      isVirtual\\n      isRegOpen\\n      regClosed\\n      extraProductCount\\n      settings {\\n        _id\\n        registration {\\n          _id\\n          maxOrders\\n          hideOrderBtn\\n          __typename\\n        }\\n        virtualRun {\\n          _id\\n          distanceMode\\n          noEcer\\n          period {\\n            start\\n            end\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticket {\\n          _id\\n          hideNumber\\n          __typename\\n        }\\n        __typename\\n      }\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      periods {\\n        _id\\n        start\\n        end\\n        preRegisterStart\\n        preRegisterEnd\\n        __typename\\n      }\\n      __typename\\n    }\\n    participants {\\n      _id\\n      profile {\\n        _id\\n        firstName\\n        lastName\\n        gender\\n        email\\n        birthDate\\n        telephone\\n        __typename\\n      }\\n      tickets {\\n        _id\\n        kind\\n        reservedNumber\\n        number\\n        eventCode\\n        productTypeId\\n        eventId\\n        registrationId\\n        participantId\\n        nameOnBib\\n        couponCodeText\\n        couponCodeId\\n        shirtTypeId\\n        shirtId\\n        delivery\\n        trackingCode\\n        deliveryCarrier\\n        deliverTo {\\n          recipient\\n          street\\n          locality\\n          city\\n          region\\n          postalCode\\n          __typename\\n        }\\n        couponCode {\\n          _id\\n          code\\n          couponCodeType {\\n            _id\\n            ticketTypeIds\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            discount\\n            __typename\\n          }\\n          __typename\\n        }\\n        ticketType {\\n          _id\\n          shirtEnabled\\n          finisherShirtEnabled\\n          quantity\\n          name {\\n            en\\n            th\\n            zh\\n            __typename\\n          }\\n          settings {\\n            _id\\n            virtualRun {\\n              _id\\n              distanceMode\\n              noEcer\\n              period {\\n                start\\n                end\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          participantFields {\\n            _id\\n            name\\n            enabled\\n            required\\n            extraMessage {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            validations {\\n              _id\\n              type\\n              params\\n              message {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          virtualBib {\\n            _id\\n            backgroundUrl\\n            fonts {\\n              _id\\n              fontFamily\\n              fontSrcUrl\\n              __typename\\n            }\\n            numberStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            nameStyle {\\n              _id\\n              font\\n              textAlign\\n              fillStyle\\n              top\\n              left\\n              __typename\\n            }\\n            __typename\\n          }\\n          race {\\n            _id\\n            distance\\n            distanceUnit\\n            startTime\\n            ageCategoryDiff\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            ageRangeStrict {\\n              male {\\n                min\\n                max\\n                __typename\\n              }\\n              female {\\n                min\\n                max\\n                __typename\\n              }\\n              __typename\\n            }\\n            ageCategories {\\n              min\\n              max\\n              gender\\n              _id\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          races {\\n            _id\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            settings {\\n              _id\\n              virtualRun {\\n                _id\\n                distanceMode\\n                noEcer\\n                period {\\n                  start\\n                  end\\n                  __typename\\n                }\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        options(sort: ORDER_ASC) {\\n          _id\\n          value\\n          order\\n          itemId\\n          itemIds\\n          questionId\\n          question {\\n            _id\\n            kind\\n            order\\n            name {\\n              en\\n              th\\n              zh\\n              __typename\\n            }\\n            items {\\n              _id\\n              imageUrl\\n              value {\\n                en\\n                th\\n                zh\\n                __typename\\n              }\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      runs {\\n        _id\\n        distance\\n        donationAmount\\n        eventId\\n        ticketItemId\\n        participantId\\n        userId\\n        raceId\\n        runnerImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        activityImage {\\n          _id\\n          original {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            _id\\n            size {\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    orders {\\n      _id\\n      code\\n      status\\n      expireAt\\n      __typename\\n    }\\n    successfulPayment {\\n      _id\\n      amount\\n      method\\n      __typename\\n    }\\n    registrationType {\\n      _id\\n      name {\\n        en\\n        th\\n        zh\\n        __typename\\n      }\\n      lotto {\\n        enabled\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"},{"operationName":"registrationCount","variables":{},"query":"query registrationCount {\\n  registrationCount\\n}\\n"}]',
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
          referer: 'https://race.phuket.run/dashboard',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
          'Content-Type': 'application/json'
        }
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5mOBWzVaFrNlJzIu4.woff2',
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

    response = http.get('https://race.phuket.run/sport%20(3).png', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'image',
        referer: 'https://race.phuket.run/dashboard',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3AQ_bLgyz8NBU3adoxPHhR16ITnFzwLUFH.NwEjO38qBXgRg0nz%2FtEBYGPjnHz63ycuVfyExIhh10s',
        'if-none-match':
          '"e681bb717c86cc377454625833a1856dd605ce525566bfb0e6f48684a4fd94a9-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })
  })

  // Automatically added sleep
  sleep(1)
}
