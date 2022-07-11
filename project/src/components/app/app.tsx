import MainPage from '../../pages/main-page/main-page';

const PromoMovie = {
  title: 'The Grand Budapest Hotel',
  bg: 'bg-the-grand-budapest-hotel',
  poster: 'the-grand-budapest-hotel-poster',
  genre: 'Drama',
  releaseYear: 2014,
};

function App(): JSX.Element {
  return (
    <MainPage promoMovie={PromoMovie} />
  );
}

export default App;
