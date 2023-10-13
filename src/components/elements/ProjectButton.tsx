import React from 'react';
import Button from './Button';

type Props = {
    project: {
        github?: string
        visitLink?: string
        playStore?: string
        navigate?: () => void
    }
}

export default function ProjectButton({project,}: Props) {
	const {github, playStore, visitLink, navigate,} = project;
    
	return (
		<>
			{navigate && (
				<Button
					tag="button"
					color="black"
					wideMobile
					onClick={ navigate }
					style={{margin: '0 1rem',}}
				>
					View Details
				</Button>
			)}
			{visitLink && (
				<Button
					tag="a"
					color="black"
					rel="noreferrer"
					target="_blank"
					wideMobile
					href={ visitLink }
					style={{margin: '0 1rem',}}
				>
					Visit Platform
				</Button>
			)}
			{playStore && (
				<Button
					tag="a"
					color="black"
					rel="noreferrer"
					target="_blank"
					wideMobile
					href={ playStore }
					style={{margin: '0 1rem',}}
				>
					Play Store
				</Button>
			)}
			{github && (
				<Button
					tag="a"
					color="black"
					rel="noreferrer"
					target="_blank"
					wideMobile
					href={ github }
					style={{margin: '0 1rem',}}
				>
					GitHub
				</Button>
			)}
		</>
	);
}