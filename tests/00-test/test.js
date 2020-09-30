import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
  vus: 1,
  duration: '1s',
  iterations: 1,
  thresholds: {
    error_rate: ['rate<0.1']
  }
}

export default () => {
  http.get('https://race.phuket.run')
  sleep(3)
  http.get('https://race.phuket.run/Test-11')

  const index = http.post(
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
          'sid=s%3AsZkT8xGImvvJYwqA6w9WCteCymyZgGtm.X9HhqidOW8TtcRvvEz%2BWfiSGFpLHuvrVdO7xLH49yv0',
        'Content-Type': 'application/json'
      }
    }
  )
  const resultIndex = JSON.stringify(index.body)
  const dataIndex = JSON.parse(resultIndex)
  console.log(dataIndex)

  const login = http.post(
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
        'sid=s%3At2tK6GXk70R_UBsffxeDuJGCt7PLmurr.%2Bmux3%2FatSoOIh0owouxtTbj%2BKXcc1JHkTNJ74naHPDg',
        'Content-Type': 'application/json'
      }
    }
  )
  const resultLogin = JSON.stringify(login.body)
  const dataLogin = JSON.parse(resultLogin)
  console.log(dataLogin)
}
