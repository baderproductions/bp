import { types } from "../types";

export const initState = {
  scrollBool: false,
};

export const actions = {
  toggleScroll: () => ({
    type: types.APP_CONFIG.SCROLL,
  }),
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case types.APP_CONFIG.SCROLL:
      return { ...state, scrollBool: !state.scrollBool };
    default:
      return state;
  }
}
