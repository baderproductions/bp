import { types } from "../types";

export const initState = {
  scrollBool: false,
  aboutModal: false,
  contactModal: false,
  langSwitch: false,
};

export const actions = {
  toggleScroll: () => ({
    type: types.APP_CONFIG.SCROLL,
  }),
  toggleAboutModal: () => ({
    type: types.APP_CONFIG.ABOUT_MODAL,
  }),
  toggleContactModal: () => ({
    type: types.APP_CONFIG.CONTACT_MODAL,
  }),
  toggleLang: () => ({
    type: types.APP_CONFIG.LANG_SWITCH,
  }),
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case types.APP_CONFIG.SCROLL:
      return { ...state, scrollBool: !state.scrollBool };
    case types.APP_CONFIG.ABOUT_MODAL:
      return { ...state, aboutModal: !state.aboutModal };
    case types.APP_CONFIG.CONTACT_MODAL:
      return { ...state, contactModal: !state.contactModal };
    case types.APP_CONFIG.LANG_SWITCH:
      return { ...state, langSwitch: !state.langSwitch };
    default:
      return state;
  }
}
