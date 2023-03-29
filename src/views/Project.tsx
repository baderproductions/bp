import React from 'react';
import {useParams,} from 'react-router-dom';
import {PROJECTS,} from '../app/constants';
import LayoutDefault from '../layouts/LayoutDefault';

export default function Project() {
	const {slug,} = useParams();

	function getProjectData() {
		switch (slug) {
			case PROJECTS.myOnvent:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'MyOnvent',
					client: 'GDM WEBMEDIA',
					role: ['Frontend Developer'],
					data: [],
				};
			case PROJECTS.mcdwwc:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'McdWWC22',
					client: 'GDM WEBMEDIA',
					role: ['Frontend Developer', 'Mobile Developer'],
					data: [],
				};
			case PROJECTS.deazy:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'Deazy',
					client: 'GDM WEBMEDIA',
					role: ['Frontend Developer'],
					data: [],
				};
			case PROJECTS.tuune:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'TUUNE',
					client: 'GDM WEBMEDIA',
					role: ['Frontend Developer'],
					data: [],
				};
			case PROJECTS.raulVidican:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'Raul Vidican',
					role: ['Frontend Developer'],
					data: [],
				};
			case PROJECTS.filelist:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'Filelist App',
					role: ['Mobile Developer'],
					data: [],
				};
			case PROJECTS.imdbAPI:
				return {
					headerImage: 'https://i.imgur.com/8ZQ2Z7M.png',
					title: 'IMDB Scraper',
					role: ['Backend Developer'],
					data: [],
				};
			default:
				return null;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const data = getProjectData() ?? {};

	return (
		<LayoutDefault>
			<div className="w-full text-bp-light-100 text-center pt-[80px]">
				{slug}
			</div>
		</LayoutDefault>
	);
}