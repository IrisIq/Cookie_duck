import { postAction, getAction } from '@/utils/request';
import { getArticalListParams } from '@/interfaces/interfaces';

const getAllArticals = (params: getArticalListParams) =>
  getAction('/article', params); //获取所有文章

export { getAllArticals };
