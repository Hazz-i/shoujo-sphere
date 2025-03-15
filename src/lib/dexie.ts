import Dexie, { Table } from 'dexie';

interface DEX_Thread {
	id: string;
	title: string;
	image: string;
	description: string;
	episode: number;
	create_at: Date;
	update_at: Date;
}

class MovieDB extends Dexie {
	threads!: Table<DEX_Thread>;

	constructor() {
		super('MovieDB');
		this.version(1).stores({
			threads: 'id, title, image, description, episode, create_at, update_at',
		});

		this.threads.hook('creating', (_, obj) => {
			obj.create_at = new Date();
			obj.update_at = new Date();
		});
		// this.threads = this.table('threads');
	}
}


export const db = new MovieDB();