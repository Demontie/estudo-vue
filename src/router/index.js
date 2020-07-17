import Vue from 'vue';
import VueRouter from 'vue-router';

const Repositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/Repositorio');
const ListaRepositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/ListaRepositorio');
const DetalheRepositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/DetalheRepositorio');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'repositorio',
    component: Repositorio,
    children: [
      {
        path: '',
        name: 'repositorio.lista',
        props: { title: 'Repositorio' },
        component: ListaRepositorio
      },
      {
        path: ':url',
        props: { title: 'Detalhes' },
        name: 'repositorio.detalhes',
        component: DetalheRepositorio
      }
    ]
  }
  // {
  //   path: ':url',
  //   name: 'repositorio.detalhes',
  //   component: DetalheRepositorio
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
