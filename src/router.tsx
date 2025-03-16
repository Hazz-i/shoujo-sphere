import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import OngoingPage from './pages/OngoingPage';
import BatchPage from './pages/BatchPage';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';
import RecentPage from './pages/RecentPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <Navigate to='/home' /> },
			{ path: '/*', element: <Navigate to='/home' /> },
			{ path: '/home/*', element: <HomePage /> },

			{ path: '/genres/*', element: <GenrePage /> },
			{ path: '/genres/:genre/:page/*', element: <GenrePage /> },

			{ path: '/recently/*', element: <RecentPage /> },
			{ path: '/recently/:recently/:page/*', element: <RecentPage /> },

			{ path: '/ongoing-all/*', element: <OngoingPage /> },
			{ path: '/ongoing-all/:page/*', element: <OngoingPage /> },

			{ path: '/batch-all/*', element: <BatchPage /> },
			{ path: '/batch-all/:page/*', element: <BatchPage /> },

			{ path: '/detail/:title/:episode/*', element: <MoviePage /> },

			{ path: '/search/:query/*', element: <SearchPage /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);

export default router;
