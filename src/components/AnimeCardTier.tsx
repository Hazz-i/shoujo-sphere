import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from './ui/card';
import { ANIME_TIERS } from '@/types/ANIME_TYPES';

interface AnimeCardTierProps {
    animeTier: ANIME_TIERS[];
}

const AnimeCardTier: React.FC<AnimeCardTierProps> = ({ animeTier }) => {
	return (
		<>
			{animeTier.slice(0,10).map((list, index) => (
				<NavLink
					to={'https://myanimelist.net/topanime.php?type=bypopularity'}
					onClick={(e) => {
						e.preventDefault();
						window.open(
							`https://myanimelist.net/topanime.php?type=bypopularity`,
							'_blank',
							'noopener noreferrer'
						);
					}}
					className='flex gap-4 group items-center'
					key={index}
				>
					<div className='flex items-center justify-center'>{list.ranking}</div>
					<Card
						className='w-[50px] h-[80px] transition-all duration-300 ease-in-out group-hover:scale-105 bg-cover bg-center'
						style={{
							backgroundImage: `url(${list.image_url})`,
						}}
					></Card>
					<div className='flex flex-col justify-between w-3/4]'>
						<h1 className='text-wrap font-semibold text-sm'>{list.title}</h1>
						<span className='grid'>
							<small className='pb-3'>
								{list.data_range}&nbsp;&nbsp;
							</small>
							<small>Rate: {list.rating} ⭐</small>
						</span>
					</div>
				</NavLink>
			))}
		</>
	);
};

export default AnimeCardTier;
