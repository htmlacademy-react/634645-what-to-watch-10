import {Link} from 'react-router-dom';

type LogoProps = {
  theme?: string,
};

function Logo({theme}: LogoProps): JSX.Element {
  const logoTheme = theme ? `logo__link--${theme}` : '';

  return (
    <div className="logo">
      <Link
        to={'/'}
        className={`logo__link ${logoTheme}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
