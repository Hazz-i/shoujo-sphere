import { NavLink, useNavigate } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useSearch } from '@/contexts/SearchProviders';
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const Header = () => {
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

	// const { setSearch, isSearch, setIsSearch } = useSearch();
	const [searchAnime, setSearchAnime] = React.useState<string>("");
	const [isSearching, setIsSearching] = React.useState<boolean>(false);

	const [isClicked, setIsClicked] = React.useState(false);
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
							Genre List
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
								<MagnifyingGlassIcon fontSize={'4'}/>
							</Button>
						</form>
					</li>
					<li>
						<ModeToggle />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
