import React from 'react';
import {useNavigate,} from 'react-router-dom';

export default function NotFound() {
	let interval: number | undefined;
	const navigate = useNavigate();
	const [time, setTime] = React.useState<string|number>(5);

	const updateCountdown = React.useCallback(() => {
		let timeCount = Number(time);
		if (timeCount <= 0) {
			clearInterval(interval);
			setTime(0);
			navigate('/');
		} else {
			--timeCount;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			setTime(timeCount);
		}
	}, [time]);

	React.useEffect(() => {
		const id = setInterval(() => updateCountdown(), 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		interval = id;
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateCountdown]);

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div className="big-timer">
				{time !== null ? time.toString() : '5'}
			</div>
			<span className="svg-stripes" />
			<h1 className="big-header">404</h1>
			<h4 className="small-header">Page not found</h4>
			<span className="svg-stripes" />
		</div>
	);
}
