import api from '../../../services/api';

export default {
  async inserirRepositorio({ commit, state }, newRepo) {
    try {
      if (newRepo.toString().trim() === '') {
        throw new Error('Informe um reposotio');
      }
      const { repositories } = state;
      const existRepo = repositories.some(
        r =>
          r.name
            .toString()
            .trim()
            .toLowerCase() ===
          newRepo
            .toString()
            .trim()
            .toLowerCase()
      );

      if (existRepo) {
        throw new Error('Repositório já adicionado');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name
      };
      commit('setRepositories', data);
    } catch (error) {
      console.log(error.message);
      //   const teste = { messege: error.message };
      throw error.message;

      //   this.setState({ erro: true, msgErro: msg });
      // } finally {
      //   this.setState({ loading: false });
      // }
    }
  }
};
