export const PresenterInfo = ({presenter}) => {
	const hPadding = 30;
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 40,
				left: 40,
				fontFamily: 'Arial',
				fontSize: 30,
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
