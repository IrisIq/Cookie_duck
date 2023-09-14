import { postAction, getAction } from '@/utils/request';
import {
  getArticalListParams,
  addArticalParams,
} from '@/interfaces/interfaces';

//获取所有文章
const getAllArticals = (params: getArticalListParams) => {
  return getAction('/article', params);
};

// 新增一篇文章
const addArtical = (params: addArticalParams) => {
  return postAction('/article', params);
};

// 根据id 获取文章
const getOneArticals = (id: number) => {
  return getAction(`/article/${id}`);
};
export { getAllArticals, addArtical, getOneArticals };
