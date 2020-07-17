<template>
  <b-list-group class="mt-2">
    <b-list-group-item
      v-for="reposositorio in repositorios"
      :key="reposositorio.name"
      class="d-flex align-items-center"
    >
      <b-avatar variant="info" :src="reposositorio.avatar" class="mr-3"></b-avatar>
      <span class="mr-auto">{{ reposositorio.name }}</span>
      <b-button pill variant="danger" class="mr-1" @click="apagarRepositorio(reposositorio)"
        >Apagar</b-button
      >
      <b-button
        pill
        variant="info"
        :to="{ name: 'repositorio.detalhes', params: { url: reposositorio.name } }"
        >Detalhes</b-button
      >
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListaRepositorio',
  computed: {
    ...mapGetters({ repositorios: 'getRepositories' })
  },
  methods: {
    ...mapActions({ carregarRepo: 'loadRepositorio', deletarRepositorio: 'deletarRepositorio' }),
    async apagarRepositorio(repositorio) {
      try {
        await this.deletarRepositorio(repositorio);
      } catch (msgErro) {
        console.log(msgErro);
      }
    }
  },
  created() {
    this.carregarRepo();
  }
};
</script>
