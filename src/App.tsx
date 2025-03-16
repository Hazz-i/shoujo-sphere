import { Routes, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';
import OngoingAllPage from './pages/OngoingAllPage';
import BatchAllPage from './pages/BatchAllPage';
import RecentPage from './pages/RecentPage';
import GenrePage from './pages/GenrePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className='min-h-screen bg-gray-950 text-white w-full flex flex-col items-center gap-10'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/genre-list' element={<GenrePage />} />
				<Route path='/recents' element={<RecentPage />} />

				<Route path='/ongoing-all' element={<OngoingAllPage />} />
				<Route path='/batch-all' element={<BatchAllPage />} />

				<Route path='/:animeTitle' element={<MoviePage />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
