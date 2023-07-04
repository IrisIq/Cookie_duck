import { postAction, getAction } from '@/utils/request';
import {
  getArticalListParams,
  addArticalParams,
} from '@/interfaces/interfaces';

const getAllArticals = (params: getArticalListParams) =>
  getAction('/article', params); //获取所有文章

const addArtical = (params: addArticalParams) => {
  return postAction('/article');
};
export { getAllArticals, addArtical };
