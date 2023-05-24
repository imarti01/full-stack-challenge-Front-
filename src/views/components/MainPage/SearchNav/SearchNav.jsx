import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SearchNav.scss';

export const SearchNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    navigate(`/search/${e.target.value}`);
    e.target.value = '';
  };

  return (
    <div className="search-nav">
      <input
        type="search"
        className="search-nav__input"
        placeholder="Search a gif"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
      />
      <nav className="search-nav__filter">
        <Link
          to={'/cats'}
          className={
            location.pathname === '/cats'
              ? 'search-nav__filter--active'
              : 'search-nav__filter--disactive'
          }
        >
          #cats
        </Link>
        <Link
          to={'/funny'}
          className={
            location.pathname === '/funny'
              ? 'search-nav__filter--active'
              : 'search-nav__filter--disactive'
          }
        >
          #funny
        </Link>
        <Link
          to={'/laugh'}
          className={
            location.pathname === '/laugh'
              ? 'search-nav__filter--active'
              : 'search-nav__filter--disactive'
          }
        >
          #laugh
        </Link>
        <Link
          to={'/best'}
          className={
            location.pathname === '/best'
              ? 'search-nav__filter--active'
              : 'search-nav__filter--disactive'
          }
        >
          #best
        </Link>
      </nav>
    </div>
  );
};
