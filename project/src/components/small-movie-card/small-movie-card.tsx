import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import React from 'react';

type SmallMovieCardProps = {
  film: Film;
  setActiveMovieCard: React.Dispatch<React.SetStateAction<number | undefined>>;
  className: string;
};

function SmallMovieCard(props: SmallMovieCardProps): JSX.Element {
  const {film, setActiveMovieCard, className} = props;
  const {id, name, previewImage} = film;

  const handleMouseEnter = () => {
    setActiveMovieCard(film.id);
  };

  return (
    <article
      className={`small-film-card ${className}`}
      onMouseEnter={handleMouseEnter}
    >
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
