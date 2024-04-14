import {Video} from 'remotion';
import {Logo} from './Logo';
import {PresenterInfo} from './PresenterInfo';

export const Interview = ({presenter, interviewUrl}) => {
	return (
		<>
			<Logo />
			<PresenterInfo presenter={presenter} />
			<Video src={interviewUrl} />
		</>
	);
};
