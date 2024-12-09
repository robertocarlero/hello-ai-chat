import MyQueryClientProvider from './providers/MyQueryClientProvider';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
	return (
		<MyQueryClientProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div>Home</div>} />
				</Routes>
			</BrowserRouter>
		</MyQueryClientProvider>
	);
}

export default App;
