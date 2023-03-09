import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { getColorTheme, toggleTheme } from 'states/colorTheme';
import { MoonIcon, SunIcon } from 'assets/svgs';

import styles from './floatingButton.module.scss';

export const FloatingButton = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector(getColorTheme);

  const buttonIcon = {
    'theme-daylight': <SunIcon />,
    'theme-night': <MoonIcon />,
    'theme-sunrise': <SunIcon />,
    'theme-sunset': <MoonIcon />,
  }[colorTheme] || <SunIcon />;

  function handleThemeButtonClick() {
    dispatch(toggleTheme());
  }

  return (
    <aside className={styles.buttonWrapper}>
      <button type='button' className={styles.hoverButton} onClick={handleThemeButtonClick}>
        <div className={cx(styles.hoverButtonInner)}>{buttonIcon}</div>
      </button>
    </aside>
  );
};
