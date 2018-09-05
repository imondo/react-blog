import axios from 'axios';
import qs from 'qs';
import nprogress from 'nprogress';

axios.default.timeout = 20000; // 响应时间
axios.defaults.withCredentials = true; // 传递cookie
// axios.defaults.baseURL = 'https://imondo.cn';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // post请求头

// 参数序列化
axios.interceptors.request.use(config => {
  nprogress.start()
  return config;
}, error => {
  return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  nprogress.done()
  return response.data;
}, error => {
  // 错误消息提示
})

export default {
  get: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: data }).then(response => {
        resolve(response.data);
      }).catch(error => {
        throw new Error(error);
      });
    }).catch(error => {
      throw new Error(error);
    });
  },
  post: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        withCredentials: true,
        transformRequest: [data => {
          return qs.stringify(data);
        }]
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        throw new Error(error);
      });
    }).catch(error => {
      throw new Error(error);
    });
  },
  put: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      axios.put(url, data, {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        throw new Error(error);
      });
    }).catch(error => {
      throw new Error(error);
    });
  },
  delete: (url) => {
    return new Promise((resolve, reject) => {
      axios.delete(url).then((response) => {
        resolve(response.data)
      }).catch((error => {
        throw new Error(error);
      }))
    }).catch(error => {
      throw new Error(error);
    })
  }
}