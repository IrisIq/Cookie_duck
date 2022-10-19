import axios from 'axios';

const service = axios.create({
  baseURL: 'http://127.0.0.1:8717/api/',
  timeout: 10000,
});

// service.interceptors.request.use();
// 响应拦截器
// axios.interceptors.response.use(
//   (res) => res.data, // 拦截到响应对象，将响应对象的 data 属性返回给调用的地方
//   (err) => Promise.reject(err),
// );

export { service as axios };
