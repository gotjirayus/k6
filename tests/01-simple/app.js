import http from 'k6/http'

export const options = {
  vus: 1,
  duration: '1s',
  iterations: 1,
  thresholds: {
    error_rate: ['rate<0.1']
  }
}

export default function () {
  const homePageRes = http.get('https://race.phuket.run')
  console.log('homePage', homePageRes.status)
}
