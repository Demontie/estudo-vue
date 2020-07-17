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
            .toLowerCase()
            .replace(/[\\/"]/g, '') ===
          newRepo
            .toString()
            .trim()
            .toLowerCase()
            .replace(/[\\/"]/g, '')
      );

      if (existRepo) {
        throw new Error('Repositório já adicionado');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
        avatar: response.data.owner.avatar_url
      };
      localStorage.setItem('repositories', JSON.stringify(data)); // seria como o axios post
      commit('setRepositories', data);
    } catch (error) {
      throw error.message;
    }
  },
  async loadRepositorio({ commit }) {
    try {
      const repositories = localStorage.getItem('repositories');

      if (repositories) {
        commit('setRepositories', JSON.parse(repositories));
      }
    } catch (error) {
      throw error.message;
    }
  },
  async deletarRepositorio({ commit }) {
    try {
      const repositories = localStorage.getItem('repositories');

      if (repositories) {
        commit('setRepositories', JSON.parse(repositories));
      }
    } catch (error) {
      throw error.message;
    }
  }
};
