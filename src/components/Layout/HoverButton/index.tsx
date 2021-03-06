import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { getColorTheme, toggleTheme } from 'states/colorTheme';

import styles from './hoverButton.module.scss';
import { MoonIcon, SunIcon } from 'assets/svgs';

const HoverButton = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector(getColorTheme);

  const buttonIcon = {
    'theme-daylight': <SunIcon />,
    'theme-night': <MoonIcon />,
    'theme-sunrise': <SunIcon />,
    'theme-sunset': <MoonIcon />,
  }[colorTheme] || <SunIcon />;

  const handleThemeButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button type='button' className={styles.hoverButton} onClick={handleThemeButtonClick}>
      <div className={cx(styles.hoverButtonInner)}>{buttonIcon}</div>
    </button>
  );
};

export default HoverButton;
