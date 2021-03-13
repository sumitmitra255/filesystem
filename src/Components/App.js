
import 'antd/dist/antd.css'
import { Headers } from './Headers'
import { LeftPanel } from './LeftPanel'
import {  useState } from 'react'
import { MainContentArea } from './MainContentArea'
import { Layout } from 'antd'
function App() {
	const { Sider, Content } = Layout
	const [selected, setSelected] = useState({})
	return (
		<div>
			<Layout>
				<Sider width='40'></Sider>
				<Content style={{ padding: '10px' }}>
					<Headers />
					<Layout>
						<Sider
							theme='light'
							style={{ padding: '10px', borderRadius: '10px' }}>
							<LeftPanel setSelected={setSelected} />
						</Sider>
						<Content style={{ padding: '10px', borderRadius: '10px' }}>
							<MainContentArea info={selected} />
						</Content>
					</Layout>
				</Content>
			</Layout>
		</div>
	)
}

export default App
