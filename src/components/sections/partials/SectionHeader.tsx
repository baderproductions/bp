import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		paragraph: PropTypes.string,
	}).isRequired,
	children: PropTypes.node,
	tag: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

const defaultProps = {
	children: null,
	tag: 'h2',
};

const SectionHeader = ({
	className,
	data,
	children,
	tag,
	...props
}: {
	className?: string;
	data: {
		title?: string;
		paragraph?: string;
		bracket?: string;
	};
	children?: React.ReactNode;
	tag?: string;
}) => {

	const classes = classNames(
		'section-header',
		className
	);

	const Component = tag as any;

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{(data.title || data.paragraph) &&
			<div
				{ ...props }
				className={ classes }
			>
				<div className="container-xs">
					{children}
					{data.title &&
					<Component
						className={
							classNames(
								'mt-0 font-bold text-3xl'
							) }>{data.title}</Component>
					}
					{data.paragraph &&
					<p className="m-0 text-bp-light-100">{data.paragraph}</p>
					}
					{data.bracket &&
					<p
						className="m-0 text-bp-light-100"
						style={{fontSize: '15px',}}>{data.bracket}</p>
					}
				</div>
			</div>
			}
		</>
	);
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;