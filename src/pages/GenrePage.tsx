import { Button } from '@/components/ui/button';
import { useStateContext } from '@/contexts/ContextProviders';
import axiosClient from '@/lib/axios';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ANIME_GENRE, ANIME_GENRE_LIST } from '@/types/ANIME_TYPES';
import AnimeCardGenre from '@/components/AnimeCardGenre';
import AnimeCardGenreSkeleton from '@/components/skeletons/AnimeCardGenreSkeleton';

const GenrePage = () => {
	const { animeGenres }: any = useStateContext();

	const [genres, setGenres] = useState<ANIME_GENRE[]>([]);
	const [listAnimes, setListAnimes] = useState<ANIME_GENRE_LIST[]>([]);
	const [pages, setPages] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [isListAnimeLoading, setIsListAnimeLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [greneSelected, setGreneSelected] = useState('Action');

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(animeGenres.length === 0 || animeGenres === undefined);

		setGenres(animeGenres);
	}, [animeGenres]);

	useEffect(() => {
		const fetchAnimeList = async () => {
			try {
				navigate(`/genres/${greneSelected}/${page}`);
				setIsListAnimeLoading(true);
				const response = await axiosClient.get(
					`/genres/${greneSelected.toLocaleLowerCase()}/${page}`
				);
				const { genre_data, genre_pages } = response.data.data;
				setListAnimes(genre_data);
				setPages(genre_pages);
			} catch (error: any) {
				console.log(error.response.status);
			} finally {
				setIsListAnimeLoading(false);
			}
		};

		fetchAnimeList();
	}, [greneSelected, page]);

	useEffect(() => {
		setPage(1);
	}, [greneSelected]);

	return (
		<div className='w-full flex justify-center min-h-[80vh]'>
			{isLoading ? (
				<span className='flex items-center justify-center w-full'>
					<div className='relative '>
						<div className='h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-400'></div>
						<div className='absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-700 animate-spin'></div>
					</div>
				</span>
			) : (
				<div className='w-3/4'>
					{/* GENRE LIST*/}
					<div className='w-full flex justify-between items-center'>
						<h2 className='text-2xl font-bold'>Anime Grene List</h2>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button>{greneSelected}</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-40 h-[30rem] lg:w-72 lg:h-[50rem] overflow-y-scroll'>
								<DropdownMenuLabel>Anime Grenes</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioGroup value={greneSelected} onValueChange={setGreneSelected}>
									{genres?.map((genre, index: number) => {
										return (
											<DropdownMenuRadioItem value={`${genre.title}`} key={index}>
												{genre.title}
											</DropdownMenuRadioItem>
										);
									})}
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					{/* END GENRE LIST*/}

					{/* GENRE*/}
					{/* GENRE */}
					<div className='w-full bg-gray-900 rounded-lg p-5 mt-5'>
						{isListAnimeLoading ? (
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								{Array.from({ length: 6 }).map((_, index) => (
									<AnimeCardGenreSkeleton key={index} />
								))}
							</div>
						) : listAnimes?.length > 0 ? (
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								{listAnimes.map((anime, index) => (
									<AnimeCardGenre key={index} genre={anime} />
								))}
							</div>
						) : (
							<div className='w-full min-h-[80vh] flex items-center justify-center'>
								<p className='text-center font-semibold text-lg'>No results found</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default GenrePage;
