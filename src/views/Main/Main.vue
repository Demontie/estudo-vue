<template>
  <AppCard title="Repository">
    <FormMain></FormMain>
  </AppCard>
</template>

<script>
import FormMain from './FormMain.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Main',
  components: {
    FormMain,
    AppCard
  }
};
</script>
