/* eslint-disable react/jsx-no-bind */
import React, {useEffect, useRef, useState,} from 'react';
import {useSelector,} from 'react-redux';
import {useTranslation,} from 'react-i18next';
// import {useNavigate,} from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import Image from '../elements/Image';
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
	// const navigate = useNavigate();
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
		paragraph: 'Frontend / Mobile Developer',
	};

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
						<div
							data-aos="fade-up-left"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									Online Events Platform
								</div>
								<h3 className="mt-0 font-bold text-2xl">{t('work.ovTitle')}</h3>
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
										{t('work.ovEmployer')}
									</span>
									<p className="my-2">
										{t('work.ovDescription')}
									</p>
								</div>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover4(true) }
								onMouseLeave={ () => setHover4(false) }
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
										backgroundColor: isHovered4 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered4 ? 1 : 0})`,
											opacity: isHovered4 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://myonvent.com/"
											style={{margin: '0 1rem',}}
										>
											Visit Platform
										</Button>
										{/* <Button
											tag="button"
											color="black"
											wideMobile
											onClick={ () => navigate('/project/myonvent-online-events') }
											style={{margin: '0 1rem',}}
										>
											More Info
										</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/ov.png"
									alt="myOnvent"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
						<div
							data-aos="fade-up-right"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									McDonald&apos;s WWC2022 Platform (Web / Mobile)
								</div>
								<h3 className="mt-0 font-bold text-2xl">McDonald&apos;s Corporation Worldwide Conference 2022</h3>
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
										{t('work.ovEmployer')}
									</span>
									<p className="my-2">
										{t('work.mdDescription')}
									</p>
								</div>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover7(true) }
								onMouseLeave={ () => setHover7(false) }
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
										backgroundColor: isHovered7 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered7 ? 1 : 0})`,
											opacity: isHovered7 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://corporate.mcdonalds.com/corpmcd/home.html"
											style={{margin: '0 1rem',}}
										>
											Visit Platform
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/mcd-wwc22-orlando')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/md.png"
									alt="WWC2022"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
						<div
							data-aos="fade-up-left"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									UK Software Services Platform
								</div>
								<h3 className="mt-0 font-bold text-2xl">Deazy</h3>
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
										{t('work.ovEmployer')}
									</span>
									<p className="my-2">
										{t('work.dzDescription')}
									</p>
								</div>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover5(true) }
								onMouseLeave={ () => setHover5(false) }
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
										backgroundColor: isHovered5 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered5 ? 1 : 0})`,
											opacity: isHovered5 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="http://deazy.com"
											style={{margin: '0 1rem',}}
										>
											Visit Platform
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/deazy-uk-marketplace')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/dz.png"
									alt="myOnvent"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
						<div
							data-aos="fade-up-right"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									Online Healthcare Platform
								</div>
								<h3 className="mt-0 font-bold text-2xl">TUUNE</h3>
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
										{t('work.ovEmployer')}
									</span>
									<p className="my-2">
										{t('work.tuuDescription')}
									</p>
								</div>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover6(true) }
								onMouseLeave={ () => setHover6(false) }
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
										backgroundColor: isHovered6 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered6 ? 1 : 0})`,
											opacity: isHovered6 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://www.tuune.com"
											style={{margin: '0 1rem',}}
										>
											Visit Platform
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/tuune-healt-platform')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/tu.png"
									alt="myOnvent"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
					</div>
					<SectionHeader
						data={ sectionHeader }
						className="center-content" />
					<div className={ splitClasses }>
						<div
							data-aos="fade-up-left"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									Head Chef SPA
								</div>
								<h3 className="mt-0 font-bold text-2xl">Raul Vidican</h3>
								<p className="m-0 text-bp-light-100">
									{t('work.rv2')}
									<br />
									{t('work.rv3')}
								</p>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover(true) }
								onMouseLeave={ () => setHover(false) }
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
										backgroundColor: isHovered ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered ? 1 : 0})`,
											opacity: isHovered ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://raulvidican.ro"
											style={{margin: '0 1rem',}}
										>
											Website
										</Button>
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://github.com/ikevin127/rv-chef"
											style={{margin: '0 1rem',}}
										>
											GitHub
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/chef-raul-vidican')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/rv.jpg"
									alt="Raul Vidican"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
						<div
							data-aos="fade-up-right"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									React native Application (iOS / Android)
								</div>
								<h3 className="mt-0 font-bold text-2xl">Filelist App</h3>
								<p className="m-0 text-bp-light-100">
									{t('work.fl1')}
									<br />
									{t('work.fl2')}
								</p>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile ',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover2(true) }
								onMouseLeave={ () => setHover2(false) }
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
										backgroundColor: isHovered2 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered2 ? 1 : 0})`,
											opacity: isHovered2 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://play.google.com/store/apps/details?id=com.baderproductions.fl"
											style={{margin: '0 1rem',}}
										>
											Play Store
										</Button>
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://github.com/ikevin127/filelist-app"
											style={{margin: '0 1rem',}}
										>
											GitHub
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/filelist-app-rn')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/fl.jpg"
									alt="Filelist App"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
						<div
							data-aos="fade-up-left"
							className="split-item">
							<div className="split-item-content center-content-mobile">
								<div className="text-xxs text-color-primary fw-600 tt-u">
									Node.js / Express API
								</div>
								<h3 className="mt-0 font-bold text-2xl">IMDB Scraper</h3>
								<p className="m-0 text-bp-light-100">{t('work.im')}</p>
							</div>
							<div
								className={ classNames(
									'split-item-image center-content-mobile',
									imageFill && 'split-item-image-fill'
								) }
								onMouseOver={ () => setHover3(true) }
								onMouseLeave={ () => setHover3(false) }
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
										backgroundColor: isHovered3 ? 'rgba(0,0,0,0.8)' : 'transparent',
										transition: '0.5s ease',
									}}
								>
									<div
										style={{
											transform: `scale(${isHovered3 ? 1 : 0})`,
											opacity: isHovered3 ? 1 : 0,
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
										<Button
											tag="a"
											color="black"
											rel="noreferrer"
											target="_blank"
											wideMobile
											href="https://github.com/ikevin127/imdb-scraper"
											style={{margin: '0 1rem',}}
										>
											GitHub
										</Button>
										{/* <Button
												tag="button"
												color="black"
												wideMobile
												onClick={() => navigate('/project/imdb-scraper-api')}
												style={{ margin: "0 1rem" }}
											>
												More Info
											</Button> */}
									</div>
								</div>
								<Image
									src="https://dlc4jqsejiyjs.cloudfront.net/im.jpg"
									alt="IMDb Scraper"
									width={ 528 }
									height={ 396 }
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSplit;
