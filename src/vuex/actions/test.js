export const LOGIN = 'LOGIN';

export const tests = {
  [LOGIN] ({ commit }, keyword) {
    commit(LOGIN, keyword)
  },
};
