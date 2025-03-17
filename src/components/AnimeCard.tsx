import { NavLink } from 'react-router-dom';
import { Card } from './ui/card';
import { ANIME_DATA } from '@/types/ANIME_TYPES';
import React from 'react';
import { PlayIcon, CalendarIcon, CalendarDateRangeIcon } from '@heroicons/react/24/solid';

interface AnimeCardProps {
	anime: ANIME_DATA;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
	return (
		<NavLink
			to={`/detail/${anime.title}/${anime.episode}`}
			onClick={(e) => {
				e.preventDefault();
				window.open(
					`/detail/${anime.title}/${anime.episode}`,
					'_blank',
					'noopener noreferrer'
				);
			}}
			className={'flex gap-5 items-center justify-start relative group'}
		>
			<Card
				className='w-[125px] h-[170px] lg:w-[145px] lg:h-[200px] transition-all duration-300 ease-in-out group-hover:scale-105 bg-cover bg-center'
				style={{
					backgroundImage: `url(${anime.image_url})`,
				}}
			>
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
					<PlayIcon className='size-10' />
				</div>
			</Card>

			<span className='flex flex-col justify-between h-3/4'>
				<h3 className='font-semibold text-wrap text-xl'>{anime.title}</h3>

				<span className='grid gap-1'>
					<small className='flex gap-1 items-center'>
						<PlayIcon className='size-3' />
						Episode: {anime.episode}
					</small>
					<small className='flex gap-1 items-center'>
						<CalendarIcon className='size-3 mt-0.5' />
						Day: {anime.day_release}
					</small>
					<small className='flex gap-1 items-center'>
						<CalendarDateRangeIcon className='size-3 mt-0.5' />
						Released: {anime.date_release}
					</small>
				</span>
			</span>
		</NavLink>
	);
};

export default AnimeCard;
