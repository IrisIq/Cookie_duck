import { postAction, getAction } from '@/utils/request';

const getAllArticals = (params = {}) => getAction('/article', params); //获取所有文章

export { getAllArticals };
