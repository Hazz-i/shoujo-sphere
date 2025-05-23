import React from 'react';
import { NavLink } from 'react-router-dom';

import { Input } from './ui/input';
import { Button } from './ui/button';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
	const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

	// const { setSearch, isSearch, setIsSearch } = useSearch();
	const [searchAnime, setSearchAnime] = React.useState<string>('');
	const [isSearching, setIsSearching] = React.useState<boolean>(false);

	const [searchClick, setSearchClick] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleSearch = (e: any) => {
		e.preventDefault();

		// if (searchAnime.length === 0) {
		// 	navigate('/neko-stream/home');
		// } else {
		// 	setSearch(searchAnime);
		// 	setIsSearch(true);
		// 	navigate(`/neko-stream/search/${encodeURIComponent(searchAnime)}`);
		// }

		setSearchAnime('');
		setSearchClick(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-20 py-4 border-b-2 border-gray-800 z-50 transition-all duration-500 ease-in-out ${
				isScrolled
					? 'lg:w-[80%] mx-auto rounded-xl backdrop-blur-md bg-[rgba(0,0,0,0.5)] shadow-lg'
					: 'w-full bg-gray-900'
			}`}
		>
			<h1 className='font-bold text-3xl'>Shoujo Sphere</h1>

			<nav>
				<ul className='flex space-x-4 font-semibold items-center'>
					<li>
						<NavLink className='hover:underline' to={`/`}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className='hover:underline' to={`/genres`}>
							Genres
						</NavLink>
					</li>
					<li>
						<NavLink className='hover:underline' to={`/recently`}>
							Recently
						</NavLink>
					</li>
					<li>
						<form
							className='flex w-full max-w-sm items-center space-x-2'
							onSubmit={handleSearch}
							action='#'
						>
							<Input
								type='serach'
								placeholder='Search anime...'
								value={searchAnime}
								onChange={(e) => setSearchAnime(e.target.value)}
							/>
							<Button type='submit' disabled={isSearching} className='cursor-pointer font-bold'>
								<MagnifyingGlassIcon fontSize={'4'} />
							</Button>
						</form>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
