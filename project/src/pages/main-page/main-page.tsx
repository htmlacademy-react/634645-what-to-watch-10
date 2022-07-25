import SmallMovieCard from '../../components/small-movie-card/small-movie-card';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import {Link} from 'react-router-dom';

const Movies = [
  {
    id: 1,
    img: 'fantastic-beasts-the-crimes-of-grindelwald',
    title: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    id: 2,
    img: 'bohemian-rhapsody',
    title: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    img: 'macbeth',
    title: 'Macbeth',
  },
  {
    id: 4,
    img: 'aviator',
    title: 'Aviator',
  },
  {
    id: 5,
    img: 'we-need-to-talk-about-kevin',
    title: 'We need to talk about Kevin',
  },
  {
    id: 6,
    img: 'what-we-do-in-the-shadows',
    title: 'What We Do in the Shadows',
  },
  {
    id: 7,
    img: 'revenant',
    title: 'Revenant',
  },
  {
    id: 8,
    img: 'johnny-english',
    title: 'Johnny English',
  },
  {
    id: 9,
    img: 'shutter-island',
    title: 'Shutter Island',
  },
  {
    id: 10,
    img: 'pulp-fiction',
    title: 'Pulp Fiction',
  },
  {
    id: 11,
    img: 'no-country-for-old-men',
    title: 'No Country for Old Men',
  },
  {
    id: 12,
    img: 'snatch',
    title: 'Snatch',
  },
  {
    id: 13,
    img: 'moonrise-kingdom',
    title: 'Moonrise Kingdom',
  },
  {
    id: 14,
    img: 'seven-years-in-tibet',
    title: 'Seven Years in Tibet',
  },
  {
    id: 15,
    img: 'midnight-special',
    title: 'Midnight Special',
  },
  {
    id: 16,
    img: 'war-of-the-worlds',
    title: 'War of the Worlds',
  },
  {
    id: 17,
    img: 'dardjeeling-limited',
    title: 'Dardjeeling Limited',
  },
  {
    id: 18,
    img: 'orlando',
    title: 'Orlando',
  },
  {
    id: 19,
    img: 'mindhunter',
    title: 'Mindhunter',
  },
  {
    id: 20,
    img: 'midnight-special',
    title: 'Midnight Special',
  }
];

type MainScreeProps = {
  promoMovie: {
    name: string,
    backgroundImage: string,
    posterImage: string,
    genre: string,
    released: number
  }
}

function MainPage({promoMovie}: MainScreeProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoMovie.backgroundImage} alt={promoMovie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoMovie.posterImage} alt={promoMovie.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoMovie.genre}</span>
                <span className="film-card__year">{promoMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link to={'/'} className="catalog__genres-link">All genres</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Comedies</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Crime</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Documentary</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Dramas</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Horror</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Kids & Family</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Romance</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Sci-Fi</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={'/'} className="catalog__genres-link">Thrillers</Link>
            </li>
          </ul>

          <div className="catalog__films-list">
            {
              [
                Movies.map((item) =>
                  (
                    <SmallMovieCard
                      key = {item.id}
                      id = {item.id}
                      moviePosterName = {item.img}
                      movieTitle = {item.title}
                      className = {'catalog__films-card'}
                    />
                  )
                )
              ]
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MainPage;
