/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import classNames from 'classnames';

const Button = ({
	className,
	tag,
	color,
	size,
	loading,
	wide,
	wideMobile,
	disabled,
	children,
	...props
}: any) => {

	const classes = classNames(
		'button',
		color && `button-${color}`,
		size && `button-${size}`,
		loading && 'is-loading',
		wide && 'button-block',
		wideMobile && 'button-wide-mobile',
		className
	);

	const Component = tag;
	return (
		<Component
			{ ...props }
			className={ classes }
			disabled={ disabled }
		>
			{ children }
		</Component>
	);
};

export default Button;