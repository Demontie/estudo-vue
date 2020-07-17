<template>
  <b-form @submit.stop.prevent :novalidate="true">
    <b-input-group class="mt-3">
      <b-form-input
        v-model="$v.newRepo.$model"
        @keyup.enter="salvar"
        required
        placeholder="Repositorio"
      ></b-form-input>
      <b-input-group-append>
        <b-button type="button" variant="success" @click="salvar">Salvar</b-button>
        <b-button type="button" variant="danger" @click="limparCampo">Limpar</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

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
      console.log(this.$v);
      this.$v.newRepo.$touch();
      if (this.$v.newRepo.$anyError) {
        return false;
      }
      return false;
      // this.erro = false;
      // this.msgErro = null;
      // this.loading = true;
      // try {
      //   await this.adicionarRepositorio(this.newRepo);
      //   this.newRepo = '';
      // } catch (msgErro) {
      //   this.erro = true;
      //   this.msgErro = msgErro;
      // } finally {
      //   this.loading = false;
      // }
    },
    async limparCampo() {
      this.newRepo = '';
      this.loading = false;
      this.erro = false;
      this.msgErro = null;
    }
  },
  validations: {
    newRepo: {
      required
    }
  }
};
</script>
