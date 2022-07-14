import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';

const PromoMovie = {
  title: 'The Grand Budapest Hotel',
  bg: 'bg-the-grand-budapest-hotel',
  poster: 'the-grand-budapest-hotel-poster',
  genre: 'Drama',
  releaseYear: 2014,
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route
            index
            element={<MainPage promoMovie={PromoMovie} />}
          />
          <Route
            path={AppRoute.Login}
            element={<SignIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={<MyList />}
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview />}
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
