import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AnimeCard from '@/components/AnimeCard';
import { ANIME_CARD } from '@/types/ANIME_TYPES';
import AnimeCardBatch from '@/components/AnimeCardBatch';
import AnimeCardTier from '@/components/AnimeCardTier';

const animeTier = [
	{
		ranking: 1,
		title: 'Fullmetal Alchemist: Brotherhood',
		image_url: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
		data_range: 'Apr 2009 - Jul 2010',
		description: 'TV (64 eps)',
		rating: 9.18,
	},
	{
		ranking: 2,
		title: 'Shingeki no Kyojin',
		image_url: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
		data_range: 'Apr 2013 - Sep 2013',
		description: 'TV (25 eps)',
		rating: 9.09,
	},
	{
		ranking: 3,
		title: 'Steins;Gate',
		image_url: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
		data_range: 'Apr 2011 - Sep 2011',
		description: 'TV (24 eps)',
		rating: 9.09,
	},
	{
		ranking: 4,
		title: 'Gintama°',
		image_url: 'https://cdn.myanimelist.net/images/anime/3/72078.jpg',
		data_range: 'Apr 2015 - Mar 2016',
		description: 'TV (51 eps)',
		rating: 9.09,
	},
	{
		ranking: 5,
		title: 'Gintama',
		image_url: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg',
		data_range: 'Apr 2006 - Mar 2010',
		description: 'TV (201 eps)',
		rating: 9.09,
	},
	{
		ranking: 6,
		title: 'Hunter x Hunter (2011)',
		image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
		data_range: 'Oct 2011 - Sep 2014',
		description: 'TV (148 eps)',
		rating: 9.09,
	},
];

const HomePage = () => {
	const navigate = useNavigate();
	const [animeList] = useState<ANIME_CARD[]>([
		{
			title: 'Shingeki no Kyojin',
			image_url: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
			episode: 12,
			date_release: '2021-12-07',
			day_release: 'Tuesday',
			anime_url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
		},
		{
			title: 'Kimetsu no Yaiba',
			image_url: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
			episode: 26,
			date_release: '2019-04-06',
			day_release: 'Saturday',
			anime_url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
		},
		{
			title: 'Jujutsu Kaisen',
			image_url: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
			episode: 24,
			date_release: '2020-10-03',
			day_release: 'Saturday',
			anime_url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV',
		},
		{
			title: 'One Piece',
			image_url: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
			episode: 1000,
			date_release: '1999-10-20',
			day_release: 'Wednesday',
			anime_url: 'https://myanimelist.net/anime/21/One_Piece',
		},
		{
			title: 'Naruto: Shippuden',
			image_url: 'https://cdn.myanimelist.net/images/anime/5/17407.jpg',
			episode: 500,
			date_release: '2007-02-15',
			day_release: 'Thursday',
			anime_url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
		},
		{
			title: 'My Hero Academia',
			image_url: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
			episode: 88,
			date_release: '2016-04-03',
			day_release: 'Sunday',
			anime_url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
		},
		{
			title: 'Death Note',
			image_url: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
			episode: 37,
			date_release: '2006-10-04',
			day_release: 'Wednesday',
			anime_url: 'https://myanimelist.net/anime/1535/Death_Note',
		},
		{
			title: 'Fullmetal Alchemist: Brotherhood',
			image_url: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
			episode: 64,
			date_release: '2009-04-05',
			day_release: 'Sunday',
			anime_url: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
		},
		{
			title: 'Sword Art Online',
			image_url: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg',
			episode: 25,
			date_release: '2012-07-08',
			day_release: 'Sunday',
			anime_url: 'https://myanimelist.net/anime/11757/Sword_Art_Online',
		},
		{
			title: 'Hunter x Hunter (2011)',
			image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
			episode: 148,
			date_release: '2011-10-02',
			day_release: 'Sunday',
			anime_url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
		},
		{
			title: 'Steins;Gate',
			image_url: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
			episode: 24,
			date_release: '2011-04-06',
			day_release: 'Wednesday',
			anime_url: 'https://myanimelist.net/anime/9253/Steins_Gate',
		},
		{
			title: 'Code Geass: Lelouch of the Rebellion',
			image_url: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg',
			episode: 25,
			date_release: '2006-10-06',
			day_release: 'Friday',
			anime_url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
		},
		{
			title: 'Demon Slayer: Mugen Train Arc',
			image_url: 'https://cdn.myanimelist.net/images/anime/1704/106947.jpg',
			episode: 7,
			date_release: '2021-10-10',
			day_release: 'Sunday',
			anime_url: 'https://myanimelist.net/anime/41127/Kimetsu_no_Yaiba__Mugen_Ressha-hen',
		},
		{
			title: 'Black Clover',
			image_url: 'https://cdn.myanimelist.net/images/anime/2/88336.jpg',
			episode: 170,
			date_release: '2017-10-03',
			day_release: 'Tuesday',
			anime_url: 'https://myanimelist.net/anime/34572/Black_Clover',
		},
	]);

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
