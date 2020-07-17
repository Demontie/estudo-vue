<template>
  <AppCard title="Repositorio">
    <FormRepositorio></FormRepositorio>
    <ListaRepositorio></ListaRepositorio>
  </AppCard>
</template>

<script>
import FormRepositorio from './FormRepositorio.vue';
import ListaRepositorio from './ListaRepositorio.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Repositorio',
  components: {
    FormRepositorio,
    AppCard,
    ListaRepositorio
  }
};
</script>
