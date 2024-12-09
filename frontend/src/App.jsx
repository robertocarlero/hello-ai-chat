import MyQueryClientProvider from './providers/MyQueryClientProvider';

function App() {
	return (
		<MyQueryClientProvider>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</MyQueryClientProvider>
	);
}

export default App;
