import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ContextProvider } from './contexts/ContextProviders';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Header />
			<div className='min-h-screen bg-gray-950 text-gray-300 w-full flex flex-col items-center gap-10 pt-26 pb-10'>
				<ContextProvider>
					<Outlet />
				</ContextProvider>
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
