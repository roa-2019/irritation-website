import request from 'superagent'

const rootUrl = '/api/v1'

export default function getAdvice () {
  return request.get(rootUrl + '/get-advice')
    .then(res => {
      let slip = JSON.parse(res.body.text)
      return(slip.slip.advice)
    })
}


