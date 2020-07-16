<template>
  <b-form>
    <b-input-group class="mt-3">
      <b-form-input v-model="newRepo" required placeholder="Repositorio"></b-form-input>
      <b-input-group-append>
        <b-button type="button" variant="success" @click="salvar">Salvar</b-button>
        <b-button type="button" variant="danger" @click="limparCampo">Resetar</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
export default {
  name: 'FormMain',
  data() {
    return {
      newRepo: '',
      loading: false,
      erro: false,
      msgErro: null
    };
  },
  methods: {
    async salvar() {
      this.erro = false;
      this.msgErro = null;
      this.loading = true;
      this.$store
        .dispatch('inserirRepositorio', this.newRepo)
        .then(teste => console.log(teste))
        .catch(arrr => console.log(arrr));
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
