// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main () {
  let response

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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
        'if-none-match':
          '"945cff6038c2fa424cbd2c96ccf896bc8e8307eaf38b51bc3fe52ef9a7cb75ae-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
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
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'text/css,*/*;q=0.1',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'style',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        accept: '*/*',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-dest': 'script',
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        'if-modified-since': 'Wed, 09 Sep 2020 01:50:37 GMT'
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
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I'
      }
    })

    response = http.get(
      'https://race.phuket.run/static/js/4.0fe7d48d.chunk.js',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'script',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"13f9dc4fe9c36dd508b3d4e93d6d89d2a688dc81d8fe7831933cb99407209fad-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"b26904374a483cc87bf3b0ca23fd6c25eee9ef463251ae7c8544b0f2398392d7-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/16.0ce3b997.chunk.js',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"5c43084cef880e0f5d592313b5ecae5921fe3d55ef4d6e0529de7fd2acc27330-br"',
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
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
        referer: 'https://race.phuket.run/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
        cookie:
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
        'if-none-match':
          '"d629a433b204c36e7675b7623600aa1f1e4bc62e80cdea854fcc202a086321ea-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get(
      'https://race.phuket.run/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%81-02.png',
      {
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"7b3045883edd528e7cb04d0ee97639bb0dc2d48ef731200d5f46cb2c28c9996f"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":true}}},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
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
            'sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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

    response = http.get('https://race.phuket.run/sport%20(2).png', {
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
        'if-none-match':
          '"3a1bff6bb6743bb3838f212bd4c6f613194a9a24df63aab54f25d85a62e5f96f-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get('https://race.phuket.run/icon_option-b.png', {
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
        'if-none-match':
          '"45412668c57e95ef2a0bd7a1998cebdc1358270a1f3e17e3a218e6c0926e118c-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/7ea4ad51-afc9-4723-96ed-56fbbf4e7d97.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"335fc3e44dfabe5740c2a8fca0e5ca71"',
          'if-modified-since': 'Mon, 20 Jul 2020 03:23:28 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/5d2d0c2f-657d-429c-b4fb-7fdc068d52a6.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"09ece161ac8a7f77d461741d4b79268d"',
          'if-modified-since': 'Fri, 05 Jun 2020 04:57:47 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/125bb828-a5f6-4087-84ab-ee7fd3ce2609.png',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"c352f3bfe84f2c13478aa73be2577fcd"',
          'if-modified-since': 'Mon, 22 Jun 2020 06:19:11 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ae0b0338-7eb7-41ef-b18c-6ddfdcdabb8e.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"00f53e1faaad638c599d4088fcdbdac8"',
          'if-modified-since': 'Fri, 05 Jun 2020 04:37:34 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/d1079612-7113-4360-8c18-63f8fae949ae.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"c1bddff1e8baeb6581b97311c250513e"',
          'if-modified-since': 'Fri, 05 Jun 2020 04:24:45 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/9cd21e02-360c-43d4-9250-31c4359b3ba7.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"64855cf5057761b23b426d49f21b8a65"',
          'if-modified-since': 'Fri, 27 Mar 2020 10:42:35 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/8b3e3cb0-64a6-4fe2-98c0-c104694b6845.png',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"d97d826c12a362cf2ab5d022bdf12e7e"',
          'if-modified-since': 'Sat, 21 Mar 2020 12:31:37 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/1802c809-83a2-40f7-acb1-70025560af70.png',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"b80005b44a954645c866d53c8f308f37"',
          'if-modified-since': 'Thu, 20 Feb 2020 10:47:26 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/BS10/cover/Cover-VIP.jpg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"19b9301f330d71d2daffab34c4f4c66f"',
          'if-modified-since': 'Wed, 04 Sep 2019 07:43:01 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/ed037b55-c3fc-4794-bbde-84d81a5dd63b.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"938a40c3ed63420054718475a65a9d5b"',
          'if-modified-since': 'Thu, 01 Aug 2019 20:24:21 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/25f190a1-9a69-4d16-912d-5683d3cc8a0a.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"1c5a46b8f70d554315c07977ad25787a"',
          'if-modified-since': 'Mon, 11 May 2020 07:45:37 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/1c2b94ff-4af6-457d-b12d-becf00836cd3.jpg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"4de78ed83a5dc717e6f960fd1f7c2b5d"',
          'if-modified-since': 'Sat, 25 May 2019 18:38:44 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/media/181f06dc-9c0c-4f50-88fb-bee7d059dec7.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"1979f689f28db7d5be336b6a7fb58cd7"',
          'if-modified-since': 'Wed, 30 Jan 2019 23:42:04 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/storage.race.phuket.run/files/51272759-8dec-405b-aab1-336fe40afe4c.jpeg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"d219ee767e28b1d9724b65c9e28a0510"',
          'if-modified-since': 'Fri, 05 Jun 2020 09:24:31 GMT'
        }
      }
    )

    response = http.get(
      'https://storage.googleapis.com/assets.thai.run/race/events/MVRBS21/theme.jpg',
      {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36',
          accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-dest': 'image',
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          'if-none-match': '"cde717cbba8b520b2a009a4876e825e5"',
          'if-modified-since': 'Thu, 01 Aug 2019 20:15:22 GMT'
        }
      }
    )

    response = http.post(
      'https://api.race.phuket.run/graphql',
      '[{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":false}},"limit":20},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
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
            'sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'Content-Type': 'application/json'
        }
      }
    )

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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"4a0386a4b09602972e40df19220472866d18fcea6156b582b9fab5d7a5b25c52-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
        }
      }
    )

    response = http.get(
      'https://race.phuket.run/static/js/17.6cebafab.chunk.js',
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
            'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
          'if-none-match':
            '"cd3dd99477b7f5aabf833880aaebc46e365dfac21b8ba73d4d6983d6f1564756-br"',
          'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
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
            'sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5KPxWzVaFrNlJzIu4.woff2',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5aOhWzVaFrNlJzIu4.woff2',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr5KPxWnVaFrNlJz.woff2',
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
      'https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWzVaFrNlJzIu4.woff2',
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
          'x-client-data': 'CJK2yQEIpLbJAQipncoBCJm1ygEI9sfKAQisycoBCOPNygE=',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
          'locale=th; sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
        'if-none-match':
          '"716015cd08a8b5d1dfe78e3055728b76dd315bd47eb05ecc37541d1e1c6c4fc1-br"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    })
  })

  // Automatically added sleep
  sleep(1)
}
