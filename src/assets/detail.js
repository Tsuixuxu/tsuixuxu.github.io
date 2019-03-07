import pg1 from "./imgs/1.jpg";
import pg2 from "./imgs/2.jpg";
import pg3 from "./imgs/3.jpg";
import pg4 from "./imgs/4.jpg";

const articles = [
  {
    id: 1,
    title: '分月西餐厅',
    designer: 'Tsui.',
    date: 'YEAL 2017',
    client: '品牌全案设计',
    imgs: [pg1, pg2],
    tag: ['poster']
  },
  {
    id: 2,
    title: '更何况不出现',
    designer: 'Tsui.',
    date: 'YEAL 2017',
    client: '品牌全案设计',
    imgs: [pg3],
    tag: ['book']
  },
  {
    id: 3,
    title: '广东省考核',
    designer: 'Tsui.',
    date: 'YEAL 2017',
    client: '品牌全案设计',
    imgs: [pg2, pg4],
    tag: ['book', 'brand']
  }
]

export default articles