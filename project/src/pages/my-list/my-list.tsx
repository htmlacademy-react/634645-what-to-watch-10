import PageFooter from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {Films} from '../../types/film';
import MoviesList from '../../components/movies-list/movies-list';

type MyListProps = {
  films: Films,
};

function MyList({films}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          films={films}
          className={'catalog__films-list'}
        />
      </section>

      <PageFooter />
    </div>
  );
}

export default MyList;
