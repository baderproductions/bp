import React from 'react';
import LayoutDefault from '../layouts/LayoutDefault';
import ProjectMain from './components/ProjectMain';

export default function Project() {
	return (
		<LayoutDefault>
			<div className="w-full text-bp-light-100 text-center pt-[80px]">
				<ProjectMain />
			</div>
		</LayoutDefault>
	);
}