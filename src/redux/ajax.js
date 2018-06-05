import axios from "axios/index";
// import fetch from 'gfetch'
// TODO 待兼容 mock
export function getAjax() {
  return axios.post('http://api.cn').then(data => data.data).catch(err => err)
}

export function getOneAjax(id) {
  return axios.post('http://api.cn/getArticleById', {id}).then(data => {
    console.log(data);
    return data.data
  }).catch(err => err)
}
