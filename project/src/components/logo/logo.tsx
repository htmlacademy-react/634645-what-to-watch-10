type LogoProps = {
  theme?: string,
  toMain?: boolean,
};

function Logo({theme, toMain}: LogoProps): JSX.Element {
  const logoTheme = theme ? `logo__link--${theme}` : '';

  return (
    <div className="logo">
      <a
        href={toMain ? 'main.html' : ''}
        className={`logo__link ${logoTheme}`}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
