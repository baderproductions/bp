/* eslint-disable react/jsx-no-bind */
import React, {useEffect, useRef, useState,} from 'react';
import {useSelector,} from 'react-redux';
import {useTranslation,} from 'react-i18next';
import {useNavigate,} from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Project from '../../components/elements/Project';
import classNames from 'classnames';

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}: any) => {
	const navigate = useNavigate();
	const {t,} = useTranslation('common');
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {scrollBool,} = useSelector<{
		appConfig: {
			scrollStack: boolean;
		}}>(state => state.appConfig);
	const workRef = useRef<{
		offsetTop: number
	}>();
	const initialRender = useRef(true);
	const [isHovered, setHover] = useState(false);
	const [isHovered2, setHover2] = useState(false);
	const [isHovered3, setHover3] = useState(false);
	const [isHovered4, setHover4] = useState(false);
	const [isHovered5, setHover5] = useState(false);
	const [isHovered6, setHover6] = useState(false);
	const [isHovered7, setHover7] = useState(false);

	useEffect(() => {
		if (initialRender.current === true) {
			initialRender.current = false;
		} else {
			window.scrollTo(0, workRef.current ? workRef.current.offsetTop : 0);
		}
	}, [scrollBool]);

	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: t('work.sub'),
		paragraph: t('work.subBracket'),
	};

	const sectionHeaderSecond = {
		title: 'Professional Experience',
		paragraph: 'Frontend Developer',
	};

	const workProjects = [
		{
			aos: 'fade-up-left',
			type: 'McDonald\'s WWC22 (Web & Mobile)',
			title: 'McDonald\'s Corporation Worldwide Conference 2022',
			employer: t('work.ovEmployer'),
			description: t('work.mdDescription'),
			onMouseOver: () => setHover7(true),
			onMouseLeave: () => setHover7(false),
			isHovered: isHovered7,
			navigate: () => navigate('/project/mcd-wwc22-orlando'),
			image: 'https://strapi-bp.s3.eu-central-1.amazonaws.com/mcd.png',
			imageAlt: 'McDonald\'s WWC22 - Project',
		},
		{
			aos: 'fade-up-right',
			type: 'Online Events Platform',
			title: t('work.ovTitle'),
			employer: t('work.ovEmployer'),
			description: t('work.ovDescription'),
			onMouseOver: () => setHover4(true),
			onMouseLeave: () => setHover4(false),
			isHovered: isHovered4,
			visitLink: 'https://myonvent.com',
			navigate: () => navigate('/project/myonvent-online-events'),
			image: 'https://dlc4jqsejiyjs.cloudfront.net/ov.png',
			imageAlt: 'myOnvent - Project',
		},
		{
			aos: 'fade-up-left',
			type: 'UK Software Services Platform',
			title: 'Deazy',
			employer: t('work.ovEmployer'),
			description: t('work.dzDescription'),
			onMouseOver: () => setHover5(true),
			onMouseLeave: () => setHover5(false),
			isHovered: isHovered5,
			visitLink: 'https://deazy.com',
			navigate: () => navigate('/project/deazy-uk-marketplace'),
			image: 'https://dlc4jqsejiyjs.cloudfront.net/dz.png',
			imageAlt: 'Deazy - Project',
		},
		{
			aos: 'fade-up-right',
			type: 'Online Healthcare Platform',
			title: 'TUUNE',
			employer: t('work.ovEmployer'),
			description: t('work.tuuDescription'),
			onMouseOver: () => setHover6(true),
			onMouseLeave: () => setHover6(false),
			isHovered: isHovered6,
			visitLink: 'https://tuune.com',
			navigate: () => navigate('/project/tuune-healt-platform'),
			image: 'https://dlc4jqsejiyjs.cloudfront.net/tu.png',
			imageAlt: 'TUUNE - Project',
		}
	].map((project, index) => ({...project, index,}));

	const selfProjects = [
		{
			aos: 'fade-up-left',
			type: 'Single Page Website',
			title: 'Head Chef - Raul Vidican',
			employer: 'Self-Employed',
			description: t('work.rv2') + '\n' + t('work.rv3'),
			onMouseOver: () => setHover(true),
			onMouseLeave: () => setHover(false),
			isHovered: isHovered,
			visitLink: 'https://raulvidican.com',
			github: 'https://github.com/ikevin127/rv-chef',
			navigate: () => navigate('/project/raul-vidican'),
			image: 'https://dlc4jqsejiyjs.cloudfront.net/rv.jpg',
			imageAlt: 'Head Chef - Raul Vidican - Project',
		},
		{
			aos: 'fade-up-right',
			type: 'React Native (iOS & Android)',
			title: 'FileList',
			employer: 'Self-Employed',
			description: t('work.fl1') + '\n' + t('work.fl2'),
			onMouseOver: () => setHover2(true),
			onMouseLeave: () => setHover2(false),
			isHovered: isHovered2,
			playStore: 'https://play.google.com/store/apps/details?id=com.baderproductions.fl',
			github: 'https://github.com/ikevin127/filelist-app',
			navigate: () => navigate('/project/filelist-app'),
			image: 'https://dlc4jqsejiyjs.cloudfront.net/fl.jpg',
			imageAlt: 'FileList - Project',
		},
		{
			aos: 'fade-up-left',
			type: 'RESTful API',
			title: 'IMDb Scraper',
			employer: 'Self-Employed',
			description: t('work.im'),
			onMouseOver: () => setHover3(true),
			onMouseLeave: () => setHover3(false),
			isHovered: isHovered3,
			github: 'https://github.com/ikevin127/imdb-scraper',
			image: 'https://dlc4jqsejiyjs.cloudfront.net/im.jpg',
			imageAlt: 'IMDb Scraper - Project',
		}
	].map((project, index) => ({...project, index,}));

	return (
		<section
			ref={ workRef }
			{ ...props }
			className={ outerClasses }>
			<div className="container">
				<div className={ innerClasses }>
					<SectionHeader
						data={ sectionHeaderSecond }
						className="center-content" />
					<div className={ splitClasses }>
						{workProjects?.map(project => (
							<Project
								key={ project.index }
								project={ project }
								imageFill={ imageFill } />
						))}
					</div>
					<SectionHeader
						data={ sectionHeader }
						className="center-content" />
					<div className={ splitClasses }>
						{selfProjects.map(project => (
							<Project
								key={ project.index }
								project={ project }
								imageFill={ imageFill } />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSplit;
