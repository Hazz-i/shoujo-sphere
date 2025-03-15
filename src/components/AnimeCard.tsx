import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ anime }: any) => {
    const navigate = useNavigate();

    const handleSelectAnime = () => {
        navigate(`/shoujo-sphere/${encodeURIComponent(anime)}`);
    };

    return (
        <li>
            <button
                className='px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 transition-all'
                onClick={handleSelectAnime}
            >
                {anime}
            </button>
        </li>
    );
};

export default AnimeCard;