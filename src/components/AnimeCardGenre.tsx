import { ANIME_GENRE_LIST } from '@/types/ANIME_TYPES';
import { Card } from './ui/card';
import React from 'react';
import { BuildingOffice2Icon, CalendarDateRangeIcon, FunnelIcon, PlayIcon } from '@heroicons/react/24/solid';

export interface GenreProps {
	genre: ANIME_GENRE_LIST;
}

const AnimeCardGenre: React.FC<GenreProps> = ({ genre }) => {
	return (
		<div className={'flex gap-5 items-center justify-start relative group'}>
			<Card
				className='w-[125px] h-[170px] lg:w-[145px] lg:h-[200px] transition-all duration-300 ease-in-out group-hover:scale-105 bg-cover bg-center relative overflow-hidden'
				style={{
					backgroundImage: `url(${genre.img_url})`,
				}}
			>
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
					<PlayIcon className='size-10' />
				</div>
			</Card>

			<span className='flex flex-col justify-between h-3/4'>
				<h3 className='font-semibold text-wrap text-start'>{genre.title}</h3>

				<span className='grid gap-1'>
					<small className='flex gap-1 items-center'>
						<PlayIcon className='size-3' />
						Episode: {genre.epsd}
					</small>
					<small className='flex gap-1 items-center'>
						<FunnelIcon className='size-3' />
						Genres: {genre.genre}
					</small>
					<small className='flex gap-1 items-center'>
						<BuildingOffice2Icon className='size-3 mt-0.5' />
						Studio: {genre.studio}
					</small>
					<small className='flex gap-1 items-center'>
						<CalendarDateRangeIcon className='size-3 mt-0.5' />
						Released: {genre.anime_date}
					</small>
				</span>
			</span>
		</div>
	);
};

export default AnimeCardGenre;
