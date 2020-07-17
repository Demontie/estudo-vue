<template>
  <ContainerApp>
    <router-view> </router-view>
  </ContainerApp>
</template>

<script>
import ContainerApp from './components/shared/ContainerApp.vue';

export default {
  name: 'App',
  components: {
    ContainerApp
  }
};
</script>
