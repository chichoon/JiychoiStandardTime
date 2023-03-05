import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import cx from 'classnames';

import { LeftArrowIcon } from 'assets/svgs';

import styles from './navSection.module.scss';

const NAVLINK_DATA = [
  { link: 'main', title: '오늘' },
  { link: 'calendar', title: '달력' },
  { link: 'mood', title: '기분' },
];

const NavSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPlayPage = location.pathname.startsWith('/play');
  const handleButtonClick = () => navigate(-1);

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
      </ul>
    </nav>
  );
};

export default NavSection;
