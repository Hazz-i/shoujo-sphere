import { Routes, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<>
			<div className='flex h-screen w-full'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/shoujo-sphere/:animeTitle' element={<MoviePage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
