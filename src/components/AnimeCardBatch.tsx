import { ANIME_CARD } from '../types/ANIME_TYPES';
import { NavLink } from 'react-router-dom';
import { Card } from './ui/card';

interface AnimeCardBatchProps {
	anime: ANIME_CARD;
}

const AnimeCardBatch: React.FC<AnimeCardBatchProps> = ({ anime }) => {
	return (
		<div className='relative group'>
			<NavLink
				to={`/neko-stream/detail/${anime.anime_url}/${anime.episode}`}
				onClick={(e) => {
					e.preventDefault();
					window.open(
						`/neko-stream/detail/${anime.anime_url}/${anime.episode}`,
						'_blank',
						'noopener noreferrer'
					);
				}}
			>
				<Card
					className='w-[130px] h-[175px] lg:w-[145px] lg:h-[200px] transition-all duration-300 ease-in-out group-hover:scale-105 bg-cover bg-center'
					style={{
						backgroundImage: `url(${anime.image_url})`,
					}}
				>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 flex flex-col justify-end p-3'>
						<h1 className='font-semibold text-sm mb-2'>{anime.title}</h1>
						<ul className='text-xs space-y-1'>
							<li className='flex items-center'>
								<i className='bx bx-play mr-1'></i>
								<span>episode: {anime.episode}</span>
							</li>
							<li className='flex items-center'>
								<i className='bx bxs-calendar mr-1'></i>
								<span>
									{anime.date_release} - {anime.day_release}
								</span>
							</li>
						</ul>
					</div>
				</Card>
			</NavLink>
		</div>
	);
};

export default AnimeCardBatch;
