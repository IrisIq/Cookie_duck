// Class组件所需接口
export interface getArticalListParams {
  type?: number;
  id?: number;
}
export interface articlList {
  id: number; // 标记为主列，值自动生成
  title: string;
  author: string;
  content: string;
  img_url: string;
  type: number;
  create_time: Date;
  update_time: Date;
}
export interface getArticalList {
  data: articlList[];
}
export interface addArticalParams {
  title: string;
  author: string;
  content: string;
  img_url: string;
  type?: number;
}
