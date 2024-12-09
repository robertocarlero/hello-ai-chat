import { Outlet } from 'react-router';

import { Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

export default function Layout() {
	return (
		<main className="w-full h-screen overflow-hidden">
			<header className="w-full flex justify-between p-4">
				<h1 className="text-2xl  text-slate-700">
					Hello <em className="font-bold">AI Chat</em>
				</h1>

				<div>
					<Avatar icon={<UserOutlined />} />
				</div>
			</header>
			<Outlet />
		</main>
	);
}
