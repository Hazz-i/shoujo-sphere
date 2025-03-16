import { useParams } from "react-router-dom";

const MoviePage = () => {
	const { title, episode } = useParams();
	console.log(title, episode);

	return (
		<section className="w-3/4 mx-auto">
				<h1 className='text-2xl font-bold'>{title}</h1>
		</section>
	);
};

export default MoviePage;
