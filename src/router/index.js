import Vue from 'vue';
import VueRouter from 'vue-router';

const Repositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/Repositorio');
const ListaRepositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/ListaRepositorio');
const DetalheRepositorio = () =>
  import(/* webpackChunkName: "usuario" */ '../views/Repositorio/DetalheRepositorio');

Vue.use(VueRouter);
// {
//   path: ':url',
//   component: UsuarioDetalhe,
//   props: true,
//   beforeEnter: (to, from, next) => {
//     console.log('antes da rota -> usuário detalhe');
//     next();
//   }
// }
const routes = [
  {
    path: '/',
    name: 'repositorio',
    component: Repositorio,
    children: [
      { path: '', component: ListaRepositorio },
      {
        path: ':url',
        component: DetalheRepositorio,
        props: true,
        beforeEnter: (to, from, next) => {
          console.log('antes da rota -> usuário detalhe');
          next();
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
