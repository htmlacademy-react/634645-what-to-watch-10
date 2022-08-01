import {Films} from '../../types/film';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {useState} from 'react';

type MoviesListProps = {
  films: Films;
  className: string;
};

function MoviesList(props: MoviesListProps): JSX.Element {
  const {films, className} = props;
  const [activeMovieCard, setActiveMovieCard] = useState<number | undefined>(undefined);

  // eslint-disable-next-line no-console
  console.log(activeMovieCard);

  return (
    <div className={className}>
      {
        [
          films.map((film) =>
            (
              <SmallMovieCard
                key = {film.id}
                film = {film}
                setActiveMovieCard = {setActiveMovieCard}
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
