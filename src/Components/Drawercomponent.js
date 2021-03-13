import { Drawer } from 'antd';

export const Drawercomponent = (props) => {
	const { close, state, info } = props;
	return (
		<>
			<Drawer
				title='Image Details'
				placement='right'
				closable={true}
				onClose={close}
				visible={state?.visible}
				key={state?.placement}>
				Title : {info?.node?.title}
				<br />
				Key : {info?.node?.key}
			</Drawer>
		</>
	);
};
