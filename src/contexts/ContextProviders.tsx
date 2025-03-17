import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axiosClient from '@/lib/axios';
import { ANIME_DATA, ANIME_GENRE, ANIME_TIERS } from '@/types/ANIME_TYPES';

// Definisi tipe untuk context state
interface AnimeContextType {
	ongoingHome: ANIME_DATA[] | undefined;
	batchHome: ANIME_DATA[] | undefined;
	topAnimeList: ANIME_TIERS[] | undefined;
	ongoingAll: ANIME_DATA[] | undefined;
	batchAll: ANIME_DATA[] | undefined;
	animeGenres: ANIME_GENRE[] | undefined;
	setAnimeGenres: (genres: ANIME_GENRE[]) => void;
	setOngoingHome: (anime: ANIME_DATA[]) => void;
	setBatchHome: (anime: ANIME_DATA[]) => void;
	setTopAnimeList: (anime: ANIME_TIERS[]) => void;
	setOngoingAll: (anime: ANIME_DATA[]) => void;
	setBatchAll: (anime: ANIME_DATA[]) => void;
}

// Context default value
const StateContent = createContext<AnimeContextType | undefined>(undefined);

// Context provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {
	// ANIME STATES
	const [ongoingHome, setOngoingHome] = useState<ANIME_DATA[]>([]);
	const [batchHome, setBatchHome] = useState<ANIME_DATA[]>([]);
	const [topAnimeList, setTopAnimeList] = useState<ANIME_TIERS[]>([]);
	const [ongoingAll, setOngoingAll] = useState<ANIME_DATA[]>([]);
	const [batchAll, setBatchAll] = useState<ANIME_DATA[]>([]);
	const [animeGenres, setAnimeGenres] = useState<ANIME_GENRE[]>([]);

	useEffect(() => {
		const fetchAnimesResponse = async () => {
			try {
				const response = await axiosClient.get(`/home`);
				const { anime, batch, top_anime_list } = response.data.data;
				setOngoingHome(anime || []);
				setTopAnimeList(top_anime_list || []);
				setBatchHome(batch || []);

				const animeGenresResponse = await axiosClient.get(`/genres`);
				setAnimeGenres(animeGenresResponse.data.data || []);

				const ongoingAllResponse = await axiosClient.get(`/ongoing-all`);
				setOngoingAll(ongoingAllResponse.data.data || []);

				const batchAllResponse = await axiosClient.get(`/batch-all`);
				setBatchAll(batchAllResponse.data.data || []);
			} catch (error) {
				console.error('Error fetching:', error);
			}
		};

		fetchAnimesResponse();
	}, []);

	return (
		<StateContent.Provider
			value={{
				ongoingAll,
				topAnimeList,
				animeGenres,
				batchHome,
				ongoingHome,
				batchAll,
				setBatchAll,
				setAnimeGenres,
				setOngoingHome,
				setTopAnimeList,
				setBatchHome,
				setOngoingAll,
			}}
		>
			{children}
		</StateContent.Provider>
	);
};

// Custom hook untuk menggunakan context dengan pengecekan
export const useStateContext = () => {
	const context = useContext(StateContent);
	if (!context) {
		throw new Error('useStateContext must be used within a ContextProvider');
	}
	return context;
};