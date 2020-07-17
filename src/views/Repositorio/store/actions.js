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
      repositories.push(data);

      localStorage.setItem('repositories', JSON.stringify(repositories)); // seria como o axios post
      commit('setRepositories', repositories);
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
  async deletarRepositorio({ dispatch, state }, repositorio) {
    try {
      const { repositories } = state;
      const pos = repositories.indexOf(repositorio);
      console.log(repositories, repositorio, pos);
      if (pos !== -1) {
        repositories.splice(pos, 1);
      }
      localStorage.setItem('repositories', JSON.stringify(repositories));
      dispatch('loadRepositorio');
    } catch (error) {
      throw error.message;
    }
  }
};
