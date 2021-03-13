import { FolderOpenOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Drawercomponent } from './Drawercomponent'
import { Card, Divider } from 'antd'
import Meta from 'antd/lib/card/Meta'
export const MainContentArea = (props) => {
	const { info } = props
	const dog = ['/Assets/Animal/Dog/dog.jfif']
	const building = ['/Assets//Towers/Building/building.jfif']
	const lotus = [
		'/Assets/Flower/lotus/lotus.jpg',
		'/Assets/Flower/lotus/lotus2.jfif',
	]
	const rose = [
		'/Assets/Flower/rose/rose.jfif',
		'/Assets/Flower/rose/rose2.jfif',
	]
	const title = info?.node?.title
	const children = info?.node?.children
	const [state, setState] = useState(false)

	const showDrawer = () => {
		setState({
			visible: true,
		})
	}

	const onClose = () => {
		setState({
			visible: false,
		})
	}

	return (
		<>
			<Divider orientation='left' plain>
				{children?.length ? (
					<h2>Folder Present In the folders</h2>
				) : (
					<h2>View Your Images Here</h2>
				)}
			</Divider>
			{children?.length ? (
				<div>
					{children?.map((ele, i) => {
						return (
							<div key={i} onClick={showDrawer}>
								<FolderOpenOutlined key={i} />
								{ele.title}
							</div>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Dog' ? (
				<div style={{ display: 'flex' }}>
					{dog.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px' }}
								hoverable='true'>
								<p>
									<img
										key={i}
										alt='timer'
										onClick={showDrawer}
										src={ele}
										height='200'
										width='200'
									/>
								</p>
								<Meta title='Dog' description='As pets they are good' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Rose' ? (
				<div style={{ display: 'flex' }}>
					{rose.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='200'
								/>
								<br />
								<br />
								<Meta title='Rose' description='Good For Fragnence' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Lotus' ? (
				<div style={{ display: 'flex' }}>
					{lotus.map((ele, i) => {
						return (
							<Card
								bordered={false}
								style={{ width: 300, borderRadius: '10px' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='200'
								/>
								<br />
								<br />
								<Meta title='Lotus' description='Good For Fragnence' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			{title === 'Building' ? (
				<div style={{ display: 'flex' }}>
					{building.map((ele, i) => {
						return (
							<Card
								bordered={true}
								style={{ width: 300, borderRadius: '10px' }}
								hoverable='true'>
								<img
									key={i}
									alt='timer'
									onClick={showDrawer}
									src={ele}
									height='200'
									width='200'
								/>
								<br />
								<br />
								<Meta title='Building' description='Good For Living' />
							</Card>
						)
					})}
				</div>
			) : (
				''
			)}
			<br />

			<Drawercomponent close={onClose} state={state} info={info} />
		</>
	)
}
