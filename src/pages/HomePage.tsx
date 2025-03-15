import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
	const navigate = useNavigate();
	const [animeList] = useState([
		'Naruto',
		'One Piece',
		'Attack on Titan',
		'Demon Slayer',
		'Jujutsu Kaisen',
	]);

	const handleSelectAnime = (animeTitle: any) => {
		navigate(`/shoujo-sphere/${encodeURIComponent(animeTitle)}`);
	};

	return (

		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white w-full'>
			<h1 className='text-3xl font-bold mb-6'>Welcome to Shoujo Sphere</h1>
			<ul className='space-y-4'>
				{animeList.map((anime) => (
					<li key={anime}>
						<button
							className='px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 transition-all'
							onClick={() => handleSelectAnime(anime)}
						>
							{anime}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomePage;
