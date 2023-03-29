import {types,} from '../types';

export const initState = {
	scrollBool: false,
	scrollStack: false,
	aboutModal: false,
	contactModal: false,
	frontendModal: false,
	backendModal: false,
	databaseModal: false,
	mobileModal: false,
	serverModal: false,
};

type ReturnType = {
	type: string;
}

export const actions = {
	toggleScroll: (): ReturnType => ({
		type: types.APP_CONFIG.SCROLL,
	}),
	toggleScrollStack: (): ReturnType => ({
		type: types.APP_CONFIG.SCROLL_STACK,
	}),
	toggleAboutModal: (): ReturnType => ({
		type: types.APP_CONFIG.ABOUT_MODAL,
	}),
	toggleContactModal: (): ReturnType => ({
		type: types.APP_CONFIG.CONTACT_MODAL,
	}),
};

export function reducer(state = initState, action: {type: string,}): {
	scrollBool: boolean;
	scrollStack: boolean;
	aboutModal: boolean;
	contactModal: boolean;
	frontendModal: boolean;
	backendModal: boolean;
	databaseModal: boolean;
	mobileModal: boolean;
	serverModal: boolean;
} {
	switch (action.type) {
		case types.APP_CONFIG.SCROLL:
			return {...state, scrollBool: !state.scrollBool,};
		case types.APP_CONFIG.SCROLL_STACK:
			return {...state, scrollStack: !state.scrollStack,};
		case types.APP_CONFIG.ABOUT_MODAL:
			return {...state, aboutModal: !state.aboutModal,};
		case types.APP_CONFIG.CONTACT_MODAL:
			return {...state, contactModal: !state.contactModal,};
		default:
			return state;
	}
}
