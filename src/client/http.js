/**
 * @file http接口统一管理
 */
import axios from 'axios';
// 初始化axios
axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.withCredential = true;
axios.defaults.crossDomain = true;

/**
 * get方法，对应get请求
 * @param {string} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [配置]
 * @return {Object} Promise
 */
export function get(url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      }, config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {string} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [配置]
 * @return {Object} Promise
 */
export function post(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}