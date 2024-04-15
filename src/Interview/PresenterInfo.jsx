import {useCurrentFrame, spring, useVideoConfig} from 'remotion';
export const PresenterInfo = ({presenter}) => {
	const hPadding = 30;
	const frame = useCurrentFrame();
	const fps = useVideoConfig().fps;
	const opacity = spring({
		frame,
		from: 0,
		to: 1,
		fps,
		durationInFrames: 60,
	});

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 40,
				left: 40,
				fontFamily: 'Arial',
				fontSize: 30,
				opacity,
			}}
		>
			<h1
				style={{
					backgroundColor: '#000E38',
					color: 'white',
					padding: 10,
					paddingLeft: hPadding,
					paddingRight: hPadding,
					marginBottom: 0,
				}}
			>
				{presenter.name}
			</h1>
			<p
				style={{
					backgroundColor: '#00E5A4',
					color: '#000E38',
					padding: 10,
					marginTop: 5,
					paddingLeft: hPadding,
					paddingRight: hPadding,
					marginBottom: 0,
				}}
			>
				{presenter.role}
			</p>
		</div>
	);
};
