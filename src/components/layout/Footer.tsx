import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useTranslation,} from 'react-i18next';

const propTypes = {
	topOuterDivider: PropTypes.bool,
	topDivider: PropTypes.bool,
};

const defaultProps = {
	topOuterDivider: false,
	topDivider: false,
};

const Footer = ({className, topOuterDivider, topDivider, ...props}: any) => {
	const classes = classNames(
		'site-footer center-content-mobile',
		topOuterDivider && 'has-top-divider',
		className
	);

	const {t,} = useTranslation('common');
	const currentYear = new Date().getFullYear();

	return (
		<footer
			{ ...props }
			className={ classes }>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
						<li>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/bader-k-2137541a2/"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="#eceded"
								>
									<title>LinkedIn</title>
									<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
								</svg>
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>&copy; {currentYear} • BADERproductions.co.uk</li>
					</ul>
				</div>
				<div
					style={{
						borderRadius: 100,
						backgroundColor: '#ff8d00',
					}}
					id="go-top"
				>
					<div
						className="smoothscroll"
						// eslint-disable-next-line react/jsx-no-bind
						onClick={ () => window.scrollTo(0, 0) }>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#000"
						>
							<title>{t('footer.top')}</title>
							<path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
						</svg>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
