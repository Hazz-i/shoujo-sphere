const AnimeCardSkeleton = () => {
	return (
		<div className={'flex gap-5 items-center justify-start'}>
			<div className='w-[125px] h-[170px] lg:w-[145px] lg:h-[200px] bg-gray-700 animate-pulse rounded-lg'></div>

			<span className='flex flex-col justify-between h-3/4'>
				<div className='w-[20rem] h-3 bg-gray-700 animate-pulse rounded-md'></div>

				<span className='grid gap-2'>
					<div className='w-[10rem] h-2 bg-gray-700 animate-pulse rounded-md'></div>
					<div className='w-[5rem] h-2 bg-gray-700 animate-pulse rounded-md'></div>
					<div className='w-[10rem] h-2 bg-gray-700 animate-pulse rounded-md'></div>
				</span>
			</span>
		</div>
	);
};

export default AnimeCardSkeleton;
