import {Img, staticFile} from 'remotion';

export const Logo = () => {
	return (
		<Img
			src={staticFile('logo.png')}
			style={{
				position: 'absolute',
				top: 20,
				right: 20,
				width: 200,
			}}
		/>
	);
};
