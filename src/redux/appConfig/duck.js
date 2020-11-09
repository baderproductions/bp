import { types } from "../types";

export const initState = {
  scrollBool: false,
  aboutModal: false,
  contactModal: false,
  frontendModal: false,
  backendModal: false,
  databaseModal: false,
  mobileModal: false,
  serverModal: false,
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
  toggleFrontendModal: () => ({
    type: types.APP_CONFIG.FRONTEND_MODAL,
  }),
  toggleBackendModal: () => ({
    type: types.APP_CONFIG.BACKEND_MODAL,
  }),
  toggleDatabaseModal: () => ({
    type: types.APP_CONFIG.DATABASE_MODAL,
  }),
  toggleMobileModal: () => ({
    type: types.APP_CONFIG.MOBILE_MODAL,
  }),
  toggleServerModal: () => ({
    type: types.APP_CONFIG.SERVER_MODAL,
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
    case types.APP_CONFIG.FRONTEND_MODAL:
      return { ...state, frontendModal: !state.frontendModal };
    case types.APP_CONFIG.BACKEND_MODAL:
      return { ...state, backendModal: !state.backendModal };
    case types.APP_CONFIG.DATABASE_MODAL:
      return { ...state, databaseModal: !state.databaseModal };
    case types.APP_CONFIG.MOBILE_MODAL:
      return { ...state, mobileModal: !state.mobileModal };
    case types.APP_CONFIG.SERVER_MODAL:
      return { ...state, serverModal: !state.serverModal };
    default:
      return state;
  }
}
