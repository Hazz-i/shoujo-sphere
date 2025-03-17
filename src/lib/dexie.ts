import Dexie, { Table } from 'dexie';

interface DEX_MOVIE {
	id: string;
	title: string;
	episode: string;
	date_release: string;
	day_release: string;
	image_alt: string;
	image_url: string;
	link: string;
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

	// mehthod untuk update film
	async updateMovie(id: string, movie: Partial<DEX_MOVIE>): Promise<void> {
		await this.movies.update(id, {
			...movie,
			update_at: new Date(),
		});
	}

	// Method untuk membaca semua film
	async readAllMovies(): Promise<DEX_MOVIE[]> {
		return await this.movies.toArray();
	}
}

export const db = new MovieDB();
