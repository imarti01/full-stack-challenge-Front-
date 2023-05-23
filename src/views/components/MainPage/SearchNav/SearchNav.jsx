import { Link } from 'react-router-dom';
import './SearchNav.scss';

export const SearchNav = () => {
  return (
    <div className="search-nav">
      <input
        type="search"
        className="search-nav__input"
        placeholder="Search a gif"
      />
      <nav className="search-nav__filter">
        <Link to={'/TAG1'}>#TAG1</Link>
        <Link to={'/TAG2'}>#TAG2</Link>
        <Link to={'/TAG3'}>#TAG3</Link>
        <Link to={'/TAG4'}>#TAG4</Link>
      </nav>
    </div>
  );
};
