import { LOGIN } from "../actions/test";

export const tests = {
  [LOGIN] (state, keyword) {
    state.tests.ID = keyword
  },
};
