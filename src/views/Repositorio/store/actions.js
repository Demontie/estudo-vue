import api from '../../../services/api';

export default {
  async inserirRepositorio({ commit, state }, newRepo) {
    try {
      console.log(state);
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
        name: response.data.full_name,
        avatar: response.data.owner.avatar_url
      };
      commit('setRepositories', data);
    } catch (error) {
      throw error.message;
    }
  }
};
