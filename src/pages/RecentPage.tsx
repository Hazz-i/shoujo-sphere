import AnimeCard from '@/components/AnimeCard';
import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/lib/dexie';

const RecentPage = () => {
	const movies = useLiveQuery(() => db.readAllMovies(), []);

	const sortedMovies = movies
		? [...movies].sort((a, b) => new Date(b.update_at).getTime() - new Date(a.update_at).getTime())
		: [];

	return (
		<>
			{sortedMovies.length === 0 ? (
				<div className='flex justify-center items-center w-full h-[80vh]'>
					<p className='font-bold text-xl'>No movies found</p>
				</div>
			) : (
				<section className='w-3/4 min-h-[80vh]'>
					<h2 className='text-2xl font-bold'>Recently Watched</h2>

					<div className='p-5 rounded-lg mt-5 grid grid-cols-3 gap-5 bg-gray-900'>
						{sortedMovies.map((anime) => (
							<AnimeCard anime={anime} key={anime.title} />
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default RecentPage;
