import { postAction, getAction, putAction } from '@/utils/request';
import {
  getArticalListParams,
  addArticalParams,
} from '@/interfaces/interfaces';

//获取所有文章
export const getAllArticals = (params: getArticalListParams) => {
  return getAction('/article', params);
};

// 新增一篇文章
export const addArtical = (params: addArticalParams) => {
  return postAction('/article', params);
};

// 根据id 获取文章
export const getOneArticals = (id: number) => {
  return getAction(`/article/${id}`);
};
// 根据id 获取文章
export const editArticals = (params: addArticalParams) => {
  return putAction(`/article/${params.id}`, params);
};
