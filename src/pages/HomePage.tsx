import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeCard from '@/components/AnimeCard';
import { ANIME_CARD } from '@/types/ANIME_TYPES';
import AnimeCardBatch from '@/components/AnimeCardBatch';
import AnimeCardTier from '@/components/AnimeCardTier';

import { animes, animeTier } from '@/types/DATA'; // DATA DUMMY

const HomePage = () => {
	const navigate = useNavigate();
	const [animeList] = useState<ANIME_CARD[]>(animes);

	return (
		<div className='w-full flex items-start justify-center gap-5'>
			{/* ONGOING & BATCH SECTION */}
			<span className='flex flex-col items-center gap-10'>
				{/* ONGOING SECTION */}
				<section className=''>
					<span className='w-full flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>Ongoing</h2>
						<a
							className='font-semibold text-small pe-5 hover:cursor-pointer'
							onClick={() => navigate(`/ongoing-all`)}
						>
							Show All
						</a>
					</span>

					<div className='p-5 rounded-lg mt-5 grid grid-cols-2 gap-5 bg-gray-900'>
						{animeList.slice(0, 14).map((anime) => (
							<AnimeCard anime={anime} key={anime.title} />
						))}
					</div>
				</section>

				{/* BATCH SECTION */}
				<section className='w-full'>
					<span className='w-full flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>Batch</h2>
						<a
							className='font-semibold text-small pe-5 hover:cursor-pointer'
							onClick={() => navigate(`/batch-all`)}
						>
							Show All
						</a>
					</span>

					<div className='p-5 rounded-lg mt-5 grid grid-cols-6 gap-5 bg-gray-900'>
						{animeList.slice(0, 12).map((anime, index) => (
							<AnimeCardBatch anime={anime} key={index} />
						))}
					</div>
				</section>
			</span>

			{/* ANIME TIER SECTION */}
			<span className='w-[20rem] flex flex-col'>
				<span className='flex justify-between items-center'>
					<h1 className='font-bold text-xl'>Top Anime List</h1>
					<small className='text-gray-500 font-semibold'>by MyAnimeList</small>
				</span>
				<div className='mt-5 grid grid-cols-1 gap-5 py-5 px-5 bg-gray-900 rounded-lg'>
					<AnimeCardTier animeTier={animeTier}/>
				</div>
			</span>
		</div>
	);
};

export default HomePage;
