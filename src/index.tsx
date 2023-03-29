import React from 'react';
import {BrowserRouter,} from 'react-router-dom';
import {I18nextProvider,} from 'react-i18next';
import {CookiesProvider,} from 'react-cookie';
import commonEN from './translations/en/common.json';
import commonRO from './translations/ro/common.json';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import App from './App';

import '../node_modules/flag-icons/css/flag-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import './assets/index.css';
import 'aos/dist/aos.css';

void i18next.init({
	interpolation: {escapeValue: false,}, // React already does escaping
	lng: 'en', // default language to use
	resources: {
		en: {common: commonEN,},
		ro: {common: commonRO,},
	},
});

ReactDOM.render(
	<I18nextProvider i18n={ i18next }>
		<CookiesProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CookiesProvider>
	</I18nextProvider>,
	document.getElementById('root')
);