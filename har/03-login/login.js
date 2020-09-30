// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main () {
  let response

  group('page_1 - https://race.phuket.run/', function () {
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
        Referer: 'https://race.phuket.run/',
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
          referer: 'https://race.phuket.run/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en;q=0.9,th-TH;q=0.8,th;q=0.7,en-US;q=0.6',
          cookie:
            'sid=s%3Av9GuT01PibZhYSRFboycfzWykhpi2YHk.NWc3%2Fr9Ub8%2FZno6YB0Xk%2B6LpvKgdwMzggkWyoq1zN9I',
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
        cookie: 'locale=th',
        'if-none-match':
          '"7b3045883edd528e7cb04d0ee97639bb0dc2d48ef731200d5f46cb2c28c9996f"',
        'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
      }
    }
  )

  response = http.get('https://race.phuket.run/sport%20(2).png', {
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
      cookie: 'locale=th',
      'if-none-match':
        '"3a1bff6bb6743bb3838f212bd4c6f613194a9a24df63aab54f25d85a62e5f96f-br"',
      'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
    }
  })

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
      cookie: 'locale=th',
      'if-none-match':
        '"45412668c57e95ef2a0bd7a1998cebdc1358270a1f3e17e3a218e6c0926e118c-br"',
      'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
    }
  })

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

  response = http.get('https://race.phuket.run/user.png', {
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
      cookie: 'locale=th',
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
      cookie: 'locale=th',
      'if-none-match':
        '"3b81d506ba30034e5f3080d0f9233c7cc08b828669f82a8fc2da268386f323b0-br"',
      'if-modified-since': 'Wed, 23 Sep 2020 02:38:31 GMT'
    }
  })

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
    'https://api.race.phuket.run/auth/login',
    '{"email":"jirayus.n@bearright.co","password":"god181240"}',
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
        'Content-Type': 'application/json'
      }
    }
  )

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

  response = http.post(
    'https://api.race.phuket.run/graphql',
    '[{"operationName":"currentUserQuery","variables":{},"query":"query currentUserQuery {\\n  currentUser {\\n    _id\\n    email\\n    profile {\\n      _id\\n      imageUrl\\n      firstName\\n      lastName\\n      birthDate\\n      nationalId\\n      nationality\\n      gender\\n      telephone\\n      __typename\\n    }\\n    achievements {\\n      _id\\n      reward {\\n        _id\\n        name {\\n          en\\n          th\\n          zh\\n          __typename\\n        }\\n        type\\n        badge {\\n          completed\\n          __typename\\n        }\\n        __typename\\n      }\\n      createdAt\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"},{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":false}},"limit":20},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"},{"operationName":"listEvents","variables":{"_operators":{"regClosed":{"ne":true}}},"query":"query listEvents($_operators: OperatorsFilterFindManyEventInput, $limit: Int, $skip: Int) {\\n  listEvents(filter: {_operators: $_operators}, limit: $limit, skip: $skip) {\\n    _id\\n    slug\\n    legacy\\n    website\\n    coverUrl\\n    thumbnailUrl\\n    hidden\\n    testMode\\n    isSoldOut\\n    isPinned\\n    regClosed\\n    provinces\\n    name {\\n      en\\n      th\\n      zh\\n      __typename\\n    }\\n    periods {\\n      start\\n      end\\n      preRegister\\n      preRegisterStart\\n      preRegisterEnd\\n      __typename\\n    }\\n    code\\n    startDate\\n    endDate\\n    hideDate\\n    location\\n    published\\n    whiteLabelUrl\\n    isRegOpen\\n    organizer {\\n      _id\\n      name\\n      taxReferrer\\n      __typename\\n    }\\n    settings {\\n      _id\\n      virtualRun {\\n        _id\\n        distanceMode\\n        noEcer\\n        period {\\n          start\\n          end\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}]',
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

  // Automatically added sleep
  sleep(1)
}
