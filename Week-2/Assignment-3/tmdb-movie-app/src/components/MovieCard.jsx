import "./MovieCard.css";

const MovieCard = ({ movie }) => {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />

            <div className="movie-content">
                <h2>{movie.title}</h2>

                <p className="release-date">
                    Release: {movie.release_date || "N/A"}
                </p>

                <p className="rating">
                    ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </p>

                <p className="overview">
                    {movie.overview
                        ? movie.overview.slice(0, 120) + "..."
                        : "No overview available"}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;