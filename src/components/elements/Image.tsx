import React, {useState, useRef, useEffect,} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	alt: PropTypes.string,
};

const defaultProps = {
	src: undefined,
	width: undefined,
	height: undefined,
	alt: undefined,
};

const Image = ({className, src, width, height, alt, ...props}: any) => {
	const [loaded, setLoaded] = useState(false);

	const image = useRef(null);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		handlePlaceholder(image.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const placeholderSrc = (w: any, h: any) => {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		return `data:image/svg+xml,%3Csvg  viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
	};

	const handlePlaceholder = (img: { style: { display: string; }; before: (arg0: HTMLImageElement) => void; getAttribute: (arg0: string) => number; className: string; }) => {
		const placeholder = document.createElement('img');
		if (!loaded) {
			img.style.display = 'none';
			img.before(placeholder);
			placeholder.src = placeholderSrc(
				img.getAttribute('width') || 0,
				img.getAttribute('height') || 0
			);
			placeholder.width = img.getAttribute('width');
			placeholder.height = img.getAttribute('height');
			placeholder.style.opacity = '0';
			img.className && placeholder.classList.add(img.className);
			placeholder.remove();
			img.style.display = '';
		}
	};

	function onLoad() {
		setLoaded(true);
	}

	return (
		<img
			{ ...props }
			ref={ image }
			className={ className }
			src={ src }
			width={ width }
			height={ height }
			alt={ alt }
			// eslint-disable-next-line react/jsx-no-bind
			onLoad={ onLoad }
		/>
	);
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;