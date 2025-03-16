import Dexie, { Table } from 'dexie';

interface DEX_MOVIE {
	id: string;
	title: string;
	image: string;
	description: string;
	episode: number;
	url: string;
	create_at: Date;
	update_at: Date;
}

class MovieDB extends Dexie {
	movies!: Table<DEX_MOVIE, string>;

	constructor() {
		super('MovieDB');
		this.version(1).stores({
			movies: 'id, title, image, description, episode, url, create_at, update_at',
		});

		this.movies.hook('creating', (_, obj) => {
			obj.create_at = new Date();
			obj.update_at = new Date();
		});
	}

	// Method untuk menambahkan film
	async createMovie(movie: Omit<DEX_MOVIE, 'id' | 'create_at' | 'update_at'>): Promise<string> {
		const id = crypto.randomUUID();
		await this.movies.add({
			id,
			...movie,
			create_at: new Date(),
			update_at: new Date(),
		});
		return id;
	}

	// Method untuk membaca semua film
	async readMovies(): Promise<DEX_MOVIE[]> {
		return await this.movies.toArray();
	}
}

export const db = new MovieDB();
