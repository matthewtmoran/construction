import {
  Home,
  PostContainer,
  NewPost,
  PostDetails
} from '../views/pages';
import { CoreLayout } from '../views/layouts';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    layout: CoreLayout
  },
  {
    path: '/posts',
    component: PostContainer,
    exact: true,
    layout: CoreLayout
  },
  {
    path: '/posts/:id',
    component: PostDetails,
    exact: true,
    layout: CoreLayout
  },
  {
    path: '/new',
    component: NewPost,
    exact: true,
    layout: CoreLayout
  }
];

export default routes;