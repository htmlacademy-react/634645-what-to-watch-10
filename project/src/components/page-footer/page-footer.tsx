import Logo from '../logo/logo';

type FooterProps = {
  toMain? : boolean,
}

function PageFooter({toMain}: FooterProps): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo theme={'light'} toMain/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
