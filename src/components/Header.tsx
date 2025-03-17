import React from 'react';
import { NavLink } from 'react-router-dom';

import { Input } from './ui/input';
import { Button } from './ui/button';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
	const { setTheme, theme } = useTheme();

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

	const handleToggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<header
			className={`flex items-center justify-between px-5 lg:px-44 lg:py-4 border-b-2 border-gray-800 fixed w-full z-50 ${
				isScrolled ? 'backdrop-blur-sm' : 'bg-gray-900'
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

					{/* <li>
						<Button onClick={handleToggleTheme} variant='ghost' className='w-full justify-start'>
							<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />{' '}
							Theme
						</Button>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
