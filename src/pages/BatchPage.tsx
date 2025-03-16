import AnimeCard from '@/components/AnimeCard';
import { animes } from '@/types/DATA';

const BatchPage = () => {
    return (
        <section className='w-3/4'>
			<h2 className='text-2xl font-bold'>Batch All</h2>

			<div className='p-5 rounded-lg mt-5 grid grid-cols-3 gap-5 bg-gray-900'>
				{animes.map((anime) => (
					<AnimeCard anime={anime} key={anime.title} />
				))}
			</div>
		</section>
    );

}

export default BatchPage;