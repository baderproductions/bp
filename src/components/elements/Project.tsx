import React from 'react';
import Image from './Image';
import classNames from 'classnames';
import ProjectButton from './ProjectButton';

type Props = {
    project: {
        index: number
        aos: string
        type: string
        title: string
        employer: string
        description: string
        isHovered: boolean
        image: string
        imageAlt: string
        github?: string
        visitLink?: string
        playStore?: string
        navigate?: () => void
        onMouseOver: () => void
        onMouseLeave: () => void
    }
    imageFill?: boolean
}

export default function Project({project, imageFill,}: Props) {
	return (
		<div
			data-aos={ project.aos }
			className="split-item">
			<div className="split-item-content center-content-mobile">
				<div className="text-xxs text-color-primary fw-600 tt-u">
					{project.type}
				</div>
				<h3 className="mt-0 font-bold text-2xl">{project.title}</h3>
				<div className="m-0 text-bp-light-100">
					<span
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
						className="icon-svg-wrapper text-sm mt-2">
						<svg
							fill="transparent"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							style={{
								width: '1rem',
								height: '1rem',
							}}
							className="icon-svg-margin">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
						</svg>
						{project.employer}
					</span>
					<p className="my-2">
						{project.description}
					</p>
				</div>
			</div>
			<div
				className={ classNames(
					'split-item-image center-content-mobile',
					imageFill && 'split-item-image-fill'
				) }
				onMouseOver={ project.onMouseOver }
				onMouseLeave={ project.onMouseLeave }
				style={{cursor: 'pointer',}}
			>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: project.isHovered ? 'rgba(0,0,0,0.8)' : 'transparent',
						transition: '0.5s ease',
					}}
				>
					<div
						style={{
							transform: `scale(${project.isHovered ? 1 : 0})`,
							opacity: project.isHovered ? 1 : 0,
							width: '100%',
							padding: '0 1rem',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							backgroundColor: 'transparent',
							transition: '0.5s ease',
						}}
					>
						<ProjectButton project={ project } />
					</div>
				</div>
				<Image
					src={ project.image }
					alt={ project.imageAlt }
					width={ 528 }
					height={ 396 }
				/>
			</div>
		</div>
	);
}