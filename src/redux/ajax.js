import fetch from './ajax-config'

export function getAjax() {
  return fetch.post('http://api.cn').then(data => data).catch(err => err)
}

export function getOneAjax(id) {
  return fetch.post('http://api.cn/getArticleById', {id}).then(data => data).catch(err => err)
}

