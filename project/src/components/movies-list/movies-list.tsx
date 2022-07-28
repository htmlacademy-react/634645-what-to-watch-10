import {Films} from '../../types/film';
import SmallMovieCard from '../small-movie-card/small-movie-card';

type MoviesListProps = {
  films: Films;
  className: string;
};

function MoviesList(props: MoviesListProps): JSX.Element {
  const {films, className} = props;
  return (
    <div className={className}>
      {
        [
          films.map((film) =>
            (
              <SmallMovieCard
                key = {film.id}
                film = {film}
                className = {'catalog__films-card'}
              />
            )
          )
        ]
      }
    </div>
  );
}

export default MoviesList;
