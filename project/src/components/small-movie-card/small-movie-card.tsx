import {Link} from 'react-router-dom';

type SmallMovieCardProps = {
  id: number,
  moviePosterName: string,
  movieTitle: string,
  className: string,
};

function SmallMovieCard({id, moviePosterName, movieTitle, className}: SmallMovieCardProps): JSX.Element {
  return (
    <article className={`small-film-card ${className}`}>
      <div className="small-film-card__image">
        <img src={`img/${moviePosterName}.jpg`} alt={movieTitle} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{movieTitle}</Link>
      </h3>
    </article>
  );
}

export default SmallMovieCard;
