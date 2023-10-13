import React from 'react';
import {PROJECTS, PROJECT_DATA,} from '../../app/constants';
import {useNavigate, useParams,} from 'react-router-dom';
import Image from '../../components/elements/Image';

export default function ProjectMain() {
	const {slug,} = useParams();
	const navigate = useNavigate();

	function getProjectData() {
		switch (slug) {
			case PROJECTS.myOnvent:
				return PROJECT_DATA.myOnvent;
			case PROJECTS.mcdwwc:
				return PROJECT_DATA.mcdwwc;
			case PROJECTS.deazy:
				return PROJECT_DATA.deazy;
			case PROJECTS.tuune:
				return PROJECT_DATA.tuune;
			case PROJECTS.raulVidican:
				return PROJECT_DATA.raulVidican;
			case PROJECTS.filelist:
				return PROJECT_DATA.filelist;
			case PROJECTS.imdbAPI:
				return PROJECT_DATA.imdbAPI;
			default:
				return null;
		}
	}

	const {type, title, roles, client, images,} = getProjectData() ?? {};

	return (
		<>
			<div
				className="mx-3 mt-7 p-2 w-max rounded-full"
				// eslint-disable-next-line react/jsx-no-bind
				onClick={ () => navigate('/') }>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#FFF"
					className='cursor-pointer w-6 h-6 -rotate-90'
				>
					<title>Go Back</title>
					<path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
				</svg>
			</div>
			<div className='pt-7 pb-14'>
				<div className="mb-10 split-item-content center-content-mobile">
					<div className="text-xxs text-color-primary fw-600 tt-u">
						{type}
					</div>
					<h3 className="mt-0 font-bold text-2xl">
						{title}
					</h3>
					<div className="flex flex-col items-center m-0 text-bp-light-100">
						<span className="icon-svg-wrapper text-sm mt-2 flex items-center">
							<svg
								fill="transparent"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="icon-svg-margin w-[1rem] h-[1rem]">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
							</svg>
							{client}
						</span>
						<p className="my-2">
							{roles?.join(', ')}
						</p>
					</div>
				</div>
				{images?.map((image, index) => {
					const unevenIndex = index % 2 !== 0;
					const isLast = index === images.length - 1;
					return (
						<div
							key={ image }
							className={ `flex w-full px-10 ${unevenIndex ? 'justify-end pr-[8%]' : 'pl-[8%]'} ${isLast ? '' : 'mb-10'}` }
						>
							<Image
								src={ image }
								alt={ image?.split('/').pop() }
								width={ 528 }
								height={ 396 }
								className="w-[1000px]"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}