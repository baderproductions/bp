import React, {useEffect,} from 'react';
import {useLocation, Route, Routes,} from 'react-router-dom';
import {store,} from './redux/configureStore';
import {useCookies,} from 'react-cookie';
import {ROUTES,} from './app/constants';
import {Provider,} from 'react-redux';
import LayoutDefault from './layouts/LayoutDefault';
import TagManager from 'react-gtm-module';
import NotFound from './views/NotFound';
import Project from './views/Project';
import Privacy from './views/Privacy';
import Home from './views/Home';
import Aos from 'aos';

// Google Analitics
const tagManagerArgs = {
	gtmId: 'GTM-KLC4WCB',
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
TagManager.initialize(tagManagerArgs);

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
Aos.init({
	delay: 100,
	offset: -1000,
	once: true,
	duration: 1000,
});

const App = () => {
	const [cookies, setCookie] = useCookies(['lang']);
	const location = useLocation();

	useEffect(() => {
		if (cookies.lang === undefined) {
			setCookie('lang', 'en', {path: '/', maxAge: 31540000, sameSite: true,});
		}
		document.body.classList.add('is-loaded');
	}, [location]);

	return (
		<Provider store={ store }>
			<Routes>
				<Route
					path={ ROUTES.root }
					element={
						<LayoutDefault>
							<Home />
						</LayoutDefault>
					} />
				<Route
					path={ ROUTES.project }
					element={ <Project /> } />
				<Route
					path={ ROUTES.privacy }
					element={ <Privacy /> } />
				<Route
					path="*"
					element={ <NotFound /> } />
			</Routes>
		</Provider>
	);
};

export default App;
