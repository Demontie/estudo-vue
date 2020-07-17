<template>
  <div>
    <h1>asdasdasd</h1>
    {{ url }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['url'],
  name: 'DetalheRepositorio',
  computed: {
    ...mapGetters({ repositorios: 'getRepositories' })
  }
  // beforeRouteEnter(to, from, next) {
  //   // console.log(this.id)
  //   console.log('dentro do componente -> usuário detalhe');
  //   // next(vm => {
  //   //     console.log(vm.id)
  //   // })
  //   const autenticado = true;
  //   autenticado ? next() : next(false);
  // }
};
</script>
