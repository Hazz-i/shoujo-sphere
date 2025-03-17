const AnimeCardTierSkeleton = () => {
	return (
		<div className='flex gap-4 group items-center'>
			<div className='flex items-center justify-center w-2 h-3 bg-gray-700 animate-pulse rounded-md'></div>
			<div className='w-[60px] h-[80px] bg-gray-700 rounded-md animate-pulse'></div>
			<div className='flex flex-col justify-between w-3/4 h-[3rem]'>
				<div className='h-2 rounded-md animate-pulse bg-gray-700'></div>
				<span className='grid gap-1'>
					<div className='w-[5rem] h-2 rounded-md animate-pulse bg-gray-700'></div>
					<div className='w-[5rem] h-2 rounded-md animate-pulse bg-gray-700'></div>
				</span>
			</div>
		</div>
	);
};

export default AnimeCardTierSkeleton;
