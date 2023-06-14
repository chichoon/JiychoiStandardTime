import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import cx from 'classnames';

import { useFetchAllSongs } from 'hooks';
import { NAVLINK_DATA } from 'utils/constants';

import { LeftArrowIcon } from 'assets/svgs';
import styles from './navSection.module.scss';

export const NavSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const songList = useFetchAllSongs();
  const randomValue = Math.floor(Math.random() * (songList.length ?? 0));
  const isPlayPage = location.pathname.startsWith('/play');
  function handleButtonClick() {
    navigate(-1);
  }

  return (
    <nav className={cx(styles.layoutNavBar, { [styles.isPlayPage]: isPlayPage })}>
      {isPlayPage && (
        <button type='button' onClick={handleButtonClick} className={styles.goBackButton}>
          <LeftArrowIcon />
        </button>
      )}
      <ul>
        {NAVLINK_DATA.map((item) => (
          <li key={`nav-link-${item.link}`} className={styles.layoutNavElement}>
            <NavLink to={item.link} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              {item.title}
            </NavLink>
          </li>
        ))}
        <li className={styles.layoutNavElement}>
          <NavLink to={`/play/${randomValue}`}>랜덤</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
