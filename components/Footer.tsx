import { textContent } from '../data/strings';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {textContent.brand.name}. {textContent.footer.rights}.</p>
        <p>
          {textContent.footer.phoneLabel}: <a href="tel:+300000000000">+30 XXX XXX XXXX</a>
        </p>
        <p>
          <a href="#privacy">{textContent.footer.privacy}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
