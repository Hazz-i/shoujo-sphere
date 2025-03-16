import { useNavigate } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className='w-full bg-gray-900 text-white py-5 px-44 flex items-center justify-between rounded-b-lg position-sticky top-0 z-10'>
			<h1 className='font-bold text-3xl'>Shoujo Sphere</h1>

			<nav>
				<ul className='flex space-x-4 font-semibold items-center'>
					<li>
						<a className='hover:underline' onClick={() => navigate(`/`)}>
							Home
						</a>
					</li>
					<li>
						<a className='hover:underline' onClick={() => navigate(`/genre-list`)}>
							Genre List
						</a>
					</li>
					<li>
						<a className='hover:underline' onClick={() => navigate(`/recents`)}>
							Recently
						</a>
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
