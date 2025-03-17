import AnimeCard from '@/components/AnimeCard';
import { useEffect, useState } from 'react';

import { useStateContext } from '@/contexts/ContextProviders'; 
import { ANIME_DATA } from '@/types/ANIME_TYPES';

const OngoingPage = () => {
	const { ongoingAll} : any = useStateContext();

	const [ongoingAnimes, setOnGoingAnimes] = useState<ANIME_DATA[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!ongoingAll) {
			setIsLoading(true);
			return;
		}
	
		setIsLoading(false);
		setOnGoingAnimes(ongoingAll);
	}, [ongoingAll]);

	return (
		<section className='w-3/4'>
			<h2 className='text-2xl font-bold'>Ongoing All</h2>

			<div className='p-5 rounded-lg mt-5 grid grid-cols-3 gap-5 bg-gray-900'>
				{ongoingAnimes?.map((anime) => (
					<AnimeCard anime={anime} key={anime.title} />
				))}
			</div>
		</section>
	);
};

export default OngoingPage;
