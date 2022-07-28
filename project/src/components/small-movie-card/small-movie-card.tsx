import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type SmallMovieCardProps = {
  film: Film;
  className: string;
};

function SmallMovieCard(props: SmallMovieCardProps): JSX.Element {
  const {film, className} = props;
  const {id, name, previewImage} = film;

  return (
    <article className={`small-film-card ${className}`}>
      <div className="small-film-card__image">
        <img src={`${previewImage}`} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallMovieCard;
