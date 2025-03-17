import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '@/lib/axios';

const MoviePage = () => {
	const { title, episode }: any = useParams();
	const [animeDetails, setAnimeDetails] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [isPlaying, setIsPlaying] = useState([]);
	const [downloads, setDownloads] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [isWhaching, setIsWhaching] = useState(false);

	const [episodeSelected, setEpisodeSelected] = useState(episode.replace(/%20/g, ' '));
	const [episodeSelectedLink, setEpisodeSelectedLink] = useState('');

	const [episodeBacth, setEpisodeBacth] = useState([]);

	useEffect(() => {
		const fetchAnimeDetails = async () => {
			try {
				setIsLoading(() => !isLoading);
				const response = await axiosClient.get(`/${title}/details`);
				setAnimeDetails(response.data.data);

				if (
					response.data.data[0].episodes.some((episode: any) =>
						episode.link.includes('https://otakudesu.cloud/episode/')
					)
				) {
					const filteredEpisodes = response.data.data[0].episodes.filter((episode: any) =>
						episode.link.includes('https://otakudesu.cloud/episode/')
					);

					// Reverse urutan episodes
					const sortedEpisodes = filteredEpisodes.reverse();
					const epsdSum = sortedEpisodes.length;

					// Set state dengan episodes yang sudah difilter dan di-reverse
					setEpisodes(sortedEpisodes);

					// Set episode terakhir dalam sortedEpisodes sebagai episode terpilih
					setEpisodeSelectedLink(
						sortedEpisodes[epsdSum - 1].link
							.replace('https://otakudesu.cloud/episode/', '')
							.replace('/', '')
					);
				}
			} catch (err: any) {
				console.log(err.message);
			} finally {
				setIsLoading(() => isLoading);
			}
		};

		fetchAnimeDetails();
	}, []);

	const handleClickEpisode = (episode: string, link: string) => () => {
		setEpisodeSelected(episode.replace(/%20/g, ' '));
		try {
			if (link.includes('https://otakudesu.cloud/episode/')) {
				setEpisodeSelectedLink(
					link.replace('https://otakudesu.cloud/episode/', '').replace('/', '')
				);
			} else {
				setEpisodeSelectedLink(link.replace('https://otakudesu.cloud/batch/', '').replace('/', ''));
			}
		} catch (err: any) {
			console.log(err.response.status);
		}
	};

	useEffect(() => {
		const fetchEpisode = async () => {
			try {
				setIsWhaching(() => !isWhaching);
				const response = await axiosClient.get(`/${title}/${episodeSelectedLink}`);
				setIsPlaying(response.data.data);
			} catch (err: any) {
				console.log(err.response.status);
			} finally {
				setIsWhaching(() => isWhaching);
			}
		};

		const fetchDownloads = async () => {
			try {
				const response = await axiosClient.get(`/${title}/${episodeSelectedLink}/downloads`);
				setDownloads(response.data.data);
			} catch (err: any) {
				console.log(err.response.status);
			}
		};

		fetchDownloads();
		fetchEpisode();
	}, [episodeSelectedLink]);

	console.log(animeDetails);

	return (
		<>
			<div className='px-3 lg:px-0 lg:container min-h-[95vh] pt-16 pb-5 flex flex-col gap-5 items-center justify-center'>
				{/* LOADING */}
				{isLoading && (
					<div className='relative'>
						<div className='h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-400'></div>
						<div className='absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-700 animate-spin'></div>
					</div>
				)}
				{/* END LOADING */}

				{/* DETAILS */}
				{/* END DETAILS */}

				{/* PLAYER */}
				{/* END PLAYER */}

				{/* DOWNLOADS */}
				{/* {!isLoading && !isWhaching && <Downloads downloads={downloads} />} */}
			</div>
		</>
	);
};

export default MoviePage;
