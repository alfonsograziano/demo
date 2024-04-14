import {Composition} from 'remotion';
import {Interview} from './Interview';

export const RemotionRoot = () => {
	return (
		<Composition
			id="Interview"
			component={Interview}
			durationInFrames={20 * 30}
			fps={30}
			width={1920}
			height={1080}
			defaultProps={{
				presenter: {
					name: 'Sara Kalathil',
					role: 'Software Engineer',
				},
				interviewUrl: 'https://website.com/interview.mp4',
			}}
		/>
	);
};
