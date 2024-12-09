import { BrowserRouter, Route, Routes } from 'react-router';

import MyQueryClientProvider from './providers/MyQueryClientProvider';
import Layout from './components/Layout';

function App() {
	return (
		<MyQueryClientProvider>
			<BrowserRouter>
				<Routes>
					<Route Component={Layout}>
						<Route index path="/" element={<div>Home</div>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</MyQueryClientProvider>
	);
}

export default App;
