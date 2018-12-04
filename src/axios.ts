import * as axios from 'axios';
import * as qs from 'qs';
import * as nprogress from 'nprogress';

interface IResData {
  results: any;
  [propName: string]: any;
}

const service = axios.default.create({
  timeout: 20000, // 响应时间
  withCredentials: true, // 传递cookie
});

// 参数序列化
service.interceptors.request.use(config => {
  nprogress.start()
  return config;
}, error => {
  return Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  nprogress.done()
  return response.data;
}, error => {
  // 错误消息提示
})

export default {
  get: (url: string, data = {}) => {
    return new Promise((resolve, reject) => {
      service.get(url, { params: data }).then(response => {
        const res:IResData = response.data;
        resolve(res);
      }).catch(error => {
        throw new Error(error);
      });
    }).catch(error => {
      throw new Error(error);
    });
  },
  post: (url: string, data = {}) => {
    return new Promise((resolve, reject) => {
      service.post(url, data, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        withCredentials: true,
        transformRequest: [() => {
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
  put: (url: string, data = {}) => {
    return new Promise((resolve, reject) => {
      service.put(url, data, {
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
  delete: (url: string) => {
    return new Promise((resolve, reject) => {
      service.delete(url).then((response) => {
        resolve(response.data)
      }).catch((error => {
        throw new Error(error);
      }))
    }).catch(error => {
      throw new Error(error);
    })
  }
}