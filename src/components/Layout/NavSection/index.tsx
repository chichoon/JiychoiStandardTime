import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './navSection.module.scss';

const NAVLINK_DATA = [
  { link: 'main', title: '오늘' },
  { link: 'calendar', title: '달력' },
  { link: 'mood', title: '기분' },
];

const NavSection = () => {
  return (
    <nav className={styles.layoutNavBar}>
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
