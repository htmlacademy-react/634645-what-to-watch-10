import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <section style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'}}
    >
      <Logo />
      <h1>404. Страница не найдена</h1>
      <Link to={'/'}>Перейти на главную</Link>
    </section>
  );
}

export default NotFound;
