type SmallMovieCardProps = {
  moviePosterName: string,
  movieTitle: string,
  className: string,
};

function SmallMovieCard({moviePosterName, movieTitle, className}: SmallMovieCardProps): JSX.Element {
  return (
    <article className={`small-film-card ${className}`}>
      <div className="small-film-card__image">
        <img src={`img/${moviePosterName}.jpg`} alt={movieTitle} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
}

export default SmallMovieCard;
