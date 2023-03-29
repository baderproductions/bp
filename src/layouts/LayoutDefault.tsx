import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({children,}: { children: React.ReactNode}): JSX.Element => (
	<>
		<Header
			navPosition="right"
			className="reveal-from-bottom" />
		<main className="site-content bg-bp-dark-200">
			{children}
		</main>
		<Footer />
	</>
);

export default LayoutDefault;  