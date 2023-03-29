/* eslint-disable react/jsx-no-bind */
import React, {useState, useRef, useEffect,} from 'react';
import classNames from 'classnames';
import Button from '../elements/Button';
import {useDispatch,} from 'react-redux';
import {AppConfigActions,} from '../../redux/actions';
import {useTranslation,} from 'react-i18next';
import Switch from '@material-ui/core/Switch';
import {withStyles,} from '@material-ui/core/styles';
import {useCookies,} from 'react-cookie';

const AntSwitch = withStyles(() => ({
	switchBase: {
		color: 'grey',
		'&$checked': {
			'& + $track': {
				opacity: 1,
				backgroundColor: 'grey',
			},
		},
	},
	thumb: {
		padding: 0,
		color: 'grey',
		backgroundColor: 'grey',
	},
	track: {
		backgroundColor: 'grey',
	},
	checked: {},
}))(Switch);

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}: any) => {
	const dispatch = useDispatch();
	const [langSwitch, setLang] = useState(false);
	const [cookies, setCookie] = useCookies(['lang']);
	const [isActive, setIsactive] = useState(false);
	const nav = useRef<any>(null);
	const hamburger = useRef(null);
	const {t, i18n,} = useTranslation('common');

	useEffect(() => {
		if (cookies.lang === 'ro') {
			void i18n.changeLanguage('ro');
			setLang(true);
		} else {
			void i18n.changeLanguage('en');
			setLang(false);
		}
		isActive && openMenu();
		document.addEventListener('keydown', keyPress);
		document.addEventListener('click', clickOutside);
		return () => {
			document.removeEventListener('keydown', keyPress);
			document.addEventListener('click', clickOutside);
			closeMenu();
		};
	}, [isActive, cookies.lang]);

	const openMenu = () => {
		document.body.classList.add('off-nav-is-active');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions
		if (nav.current) nav.current.style.maxHeight = `${nav.current.scrollHeight}px`;
		setIsactive(true);
	};

	const closeMenu = () => {
		document.body.classList.remove('off-nav-is-active');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
	};

	const keyPress = (e: KeyboardEvent) => {
		isActive && e.keyCode === 27 && closeMenu();
	};

	const clickOutside = (e: Event) => {
		if (!nav.current) return;
		if (
			!isActive ||
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      nav.current.contains(e.target) ||
      e.target === hamburger.current
		)
			return;
		closeMenu();
	};

	const classes = classNames(
		'site-header',
		bottomOuterDivider && 'has-bottom-divider',
		className
	);

	const openAboutModal = (e: Event) => {
		e.preventDefault();
		const html = document.getElementById('html');
		if (html) html.style.overflowY = 'hidden';
    
		dispatch(AppConfigActions.toggleAboutModal());
	};

	// const openContactModal = (e) => {
	//   e.preventDefault();
	//   document.getElementById("html").style.overflowY = "hidden";
	//   dispatch(AppConfigActions.toggleContactModal());
	// };

	const handleSwitch = () => {
		if (cookies.lang === 'ro') {
			void i18n.changeLanguage('en');
			setCookie('lang', 'en', {path: '/', maxAge: 31540000, sameSite: true,});
			setLang(false);
		} else {
			void i18n.changeLanguage('ro');
			setCookie('lang', 'ro', {path: '/', maxAge: 31540000, sameSite: true,});
			setLang(true);
		}
	};

	return (
		<header
			{ ...props }
			className={ classes }>
			<div className="container">
				<div
					className={ classNames(
						'site-header-inner',
						bottomDivider && 'has-bottom-divider'
					) }
				>
					{!hideNav && (
						<>
							<button
								type='button'
								ref={ hamburger }
								className="header-nav-toggle"
								onClick={ isActive ? closeMenu : openMenu }
							>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav
								ref={ nav }
								className={ classNames('header-nav', isActive && 'is-active') }
							>
								<div className="header-nav-inner">
									<ul
										className={ classNames(
											'list-reset text-xs',
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											navPosition && `header-nav-${navPosition}`
										) }
										style={{margin: '1rem 0',}}
									>
										<li>
											<div
												className="roen-container"
											>
												<span
													style={{
														display: 'flex',
														flexDirection: 'column',
														justifyContent: 'center',
														alignItems: 'center',
														fontWeight: 'bold',
													}}
													title={ t('header.lang') }
													className="text-bp-light-100"
												>
													<AntSwitch
														icon={
															<span
																style={{
																	position: 'relative',
																	top: '0.3px',
																	width: '1rem',
																	height: '1rem',
																	borderRadius: '100%',
																}}
																className="fi fi-gb"
															/>
														}
														checkedIcon={
															<span
																style={{
																	position: 'relative',
																	top: '0.5px',
																	width: '1rem',
																	height: '1rem',
																	borderRadius: '100%',
																}}
																className="fi fi-ro"
															/>
														}
														color="default"
														inputProps={{
															'aria-label': 'checkbox with default color',
														}}
														style={{fontSize: '0.5rem',}}
														checked={ langSwitch }
														onChange={ handleSwitch }
													/>
													EN/RO
												</span>
											</div>
										</li>
									</ul>
									<ul
										className={ classNames(
											'list-reset text-xs',
											// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
											navPosition && `header-nav-${navPosition}`
										) }
										style={{margin: '0.5rem 0',}}
									>
										<li>
											<Button
												tag="div"
												color="black"
												className="button-sm abcd-margin"
												wideMobile
												onClick={ openAboutModal }
											>
												{t('header.story')}
											</Button>
										</li>
									</ul>
									{/* {!hideSignin && (
										<ul
										style={{ margin: "0.5rem 0" }}
										className="list-reset header-nav-right"
										>
										<li>
											<div
											style={{ color: "#151719" }}
											className="button button-primary button-wide-mobile button-sm"
											onClick={openContactModal}
											>
											Contact
											</div>
										</li>
										</ul>
									)} */}
								</div>
							</nav>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
