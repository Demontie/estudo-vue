<template>
  <b-form>
    <b-input-group class="mt-3">
      <b-form-input v-model="newRepo" required placeholder="Repositorio"></b-form-input>
      <b-input-group-append>
        <b-button type="button" variant="success" @click="salvar">Salvar</b-button>
        <b-button type="button" variant="danger" @click="limparCampo">Limpar</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FormRepositorio',
  data() {
    return {
      newRepo: '',
      loading: false,
      erro: false,
      msgErro: null
    };
  },
  methods: {
    ...mapActions({
      adicionarRepositorio: 'inserirRepositorio'
    }),
    async salvar() {
      this.erro = false;
      this.msgErro = null;
      this.loading = true;
      try {
        await this.adicionarRepositorio(this.newRepo);
        this.newRepo = '';
      } catch (msgErro) {
        this.erro = true;
        this.msgErro = msgErro;
      } finally {
        this.loading = false;
      }
    },
    async limparCampo() {
      this.newRepo = '';
      this.loading = false;
      this.erro = false;
      this.msgErro = null;
    }
  }
};
</script>
