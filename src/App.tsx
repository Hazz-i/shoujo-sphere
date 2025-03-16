import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ContextProvider } from './contexts/ContextProviders';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div className='min-h-screen bg-gray-950 text-gray-300 w-full flex flex-col items-center gap-10'>
				<Header />
				<ContextProvider>
					<Outlet />
				</ContextProvider>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
