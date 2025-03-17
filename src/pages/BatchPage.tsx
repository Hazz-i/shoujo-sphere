import AnimeCard from '@/components/AnimeCard';
import { useStateContext } from '@/contexts/ContextProviders';
import { ANIME_DATA } from '@/types/ANIME_TYPES';
import { useEffect, useState } from 'react';

const BatchPage = () => {
	const { batchAll} : any = useStateContext();

	const [batchAnimes, setbatchAnimes] = useState<ANIME_DATA[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!batchAll) {
			setIsLoading(true);
			return;
		}
	
		setIsLoading(false);
		setbatchAnimes(batchAll);
	}, [batchAll]);

    return (
        <section className='w-3/4'>
			<h2 className='text-2xl font-bold'>Batch All</h2>

			<div className='p-5 rounded-lg mt-5 grid grid-cols-3 gap-5 bg-gray-900'>
				{batchAnimes?.map((anime) => (
					<AnimeCard anime={anime} key={anime.title} />
				))}
			</div>
		</section>
    );

}

export default BatchPage;