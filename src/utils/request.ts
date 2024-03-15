import { axios } from './http';
export function postAction(url: string, parameter = {}) {
  return axios({
    url: url,
    method: 'post',
    data: parameter,
  });
}

// //get
export function getAction(url: string, parameter = {}) {
  return axios({
    url: url,
    method: 'get',
    params: parameter,
  }).catch((res) => {
    console.log(res);
  });
}

// put
export function putAction(url: string, parameter = {}) {
  return axios({
    url: url,
    method: 'put',
    data: parameter,
  }).catch((res) => {
    console.log(res);
  });
}

//get
// export function getAction(url: string, parameter = {}) {
//   return axios.get(url, parameter);
// }
