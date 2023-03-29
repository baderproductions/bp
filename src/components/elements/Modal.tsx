/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {MouseEventHandler, useEffect,} from 'react';
import classNames from 'classnames';

const Modal = ({
	className,
	children,
	handleClose,
	show,
	closeHidden,
	video,
	videoTag,
	...props
}: any) => {
	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		document.addEventListener('click', stopProgagation);
		return () => {
			document.removeEventListener('keydown', keyPress);
			document.removeEventListener('click', stopProgagation);
		};
	});

	useEffect(() => {
		handleBodyClass();
	}, [props.show]);

	const handleBodyClass = () => {
		if (document.querySelectorAll('.modal.is-active').length) {
			document.body.classList.add('modal-is-active');
		} else {
			document.body.classList.remove('modal-is-active');
		}
	};

	const keyPress = (e: KeyboardEvent) => {
		e.keyCode === 27 && handleClose(e);
	};

	const stopProgagation = (e: Event) => {
		e.stopPropagation();
	};

	const classes = classNames(
		'modal',
		show && 'is-active',
		video && 'modal-video',
		className
	);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{show && (
				<div
					{ ...props }
					className={ classes }
					onClick={ handleClose }>
					<div
						className="modal-inner text-bp-light-100"
						// eslint-disable-next-line react/jsx-no-bind
						onClick={ stopProgagation as unknown as MouseEventHandler<HTMLDivElement> }>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
