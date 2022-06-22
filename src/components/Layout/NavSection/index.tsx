import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import styles from './navSection.module.scss';

const NAVLINK_DATA: string[] = ['main', 'mood', 'custom'];

const NavSection = () => {
  return (
    <nav className={styles.layoutNavBar}>
      <ul>
        {NAVLINK_DATA.map((item) => (
          <li key={`nav-link-${item}`}>
            <NavLink to={item} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              <div className={styles.navigationBarItem}>{item}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavSection;
