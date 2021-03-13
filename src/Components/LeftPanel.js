import { Tree } from 'antd'
import { DownOutlined, FolderOpenOutlined } from '@ant-design/icons'

export const LeftPanel = (props) => {
	const { setSelected } = props

	const onSelect = (selectedKeys, info) => {
		setSelected(info)
	}
	const data = [
		{
			title: 'Directory',
			key: '0-0',
			icon: <FolderOpenOutlined />,
			children: [
				{
					title: 'Flower',
					key: '0-0-0',
					icon: <FolderOpenOutlined />,
					children: [
						{
							title: 'Rose',
							key: '0-0-0-0',
							icon: <FolderOpenOutlined />,
						},
						{
							title: 'Lotus',
							key: '0-0-0-1',
							icon: <FolderOpenOutlined />,
						},
					],
				},
				{
					title: 'Animal',
					key: '0-0-1',
					children: [
						{
							title: 'Dog',
							key: '0-0-1-0',
							icon: <FolderOpenOutlined />,
						},
					],
				},
				{
					title: 'Towers',
					key: '0-0-2',
					children: [
						{
							title: 'Building',
							key: '0-0-2-0',
							icon: <FolderOpenOutlined />,
						},
					],
				},
			],
		},
	]

	return (
		<>
			<Tree
				showIcon
				defaultExpandAll
				onSelect={onSelect}
				defaultSelectedKeys={['0-0-0']}
				switcherIcon={<DownOutlined />}
				treeData={data}
			/>
		</>
	)
}
