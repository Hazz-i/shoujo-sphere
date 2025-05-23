export interface ANIME_DATA {
	date_release: string;
	day_release: string;
	episode: string;
	image_alt: string;
	image_url: string;
	link: string;
	title: string;
}

export interface ANIME_TIERS {
	data_range: string;
	description: string;
	image_url: string;
	ranking: string;
	rating: string;
	title: string;
}

export interface ANIME_GENRE {
	link: string;
	title: string;
}

export interface ANIME_GENRE_LIST {
	anime_date: string;
	epsd: string;
	link: string;
	rating: string;
	synopsis: string;
	title: string;
	
	status?: string;
	studio?: string;
	
	genre?: string;
	genres?: string;
	
	img_url?: string;
	image?: string;
}
