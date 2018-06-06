import fetch from 'gfetch'
// TODO 待兼容 mock
export function getAjax() {
  return fetch.post('http://api.cn').then(data => {
    return JSON.parse(data)
  }).catch(err => err)
}

export function getOneAjax(id) {
  return fetch.post('http://api.cn/getArticleById', {id}).then(data => {
    return JSON.parse(data)
  }).catch(err => err)
}
