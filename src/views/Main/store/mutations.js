export default {
  setRepositories(state, repositorio) {
    const addRepo = [...state.repositories, repositorio];
    state.repositories = addRepo;
  }
};
