import {  PageHeader } from 'antd'

export const Headers = (props) => {
	const routes = [
		{
			path: 'index',
			breadcrumbName: 'Image Gallery',
		},
		{
			path: 'first',
			breadcrumbName: 'Images',
		},
	]
	return (
		<div className='site-page-header-ghost-wrapper'>
			<PageHeader
				ghost={false}
				title='Image Gallery'
				className='Gallery'
				subTitle='View Your Images Here'
				breadcrumb={{ routes }}>
				<hr style={{ backgroundColor: '#87cef5' }} />
			</PageHeader>
		</div>
	)
}
