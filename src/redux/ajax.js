import axios from "axios/index";

export function getAjax() {
  return axios.post('http://api.cn').then(data => data.data).catch(err => err)
}

export function getOneAjax(id) {
  return axios.post('http://api.cn/getArticleById', {id}).then(data => {
    console.log(data);
    return data.data
  }).catch(err => err)
}
