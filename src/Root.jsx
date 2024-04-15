import {Composition} from 'remotion';
import {Interview} from './Interview';

export const RemotionRoot = () => {
	return (
		<Composition
			id="Interview"
			component={Interview}
			durationInFrames={5 * 30}
			fps={30}
			width={1920}
			height={1080}
			defaultProps={{
				presenter: {
					name: 'Sara Kalathil',
					role: 'Software Engineer',
				},
				interviewUrl:
					'https://create-videos-demo.s3.eu-west-1.amazonaws.com/interview.mp4',
			}}
		/>
	);
};
