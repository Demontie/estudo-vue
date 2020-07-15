<template>
  <ContainerApp>
    <AppCard title="Teste">Primeiro teste</AppCard>
  </ContainerApp>
</template>

<script>
import ContainerApp from '../../components/shared/ContainerApp.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Main',
  components: {
    ContainerApp,
    AppCard
  }
};
</script>
