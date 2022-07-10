import { useDispatch, useSelector } from 'react-redux';

import { getColorTheme, toggleTheme } from 'states/colorTheme';

import styles from './hoverButton.module.scss';
import { MoonIcon, SunIcon, SunriseIcon } from 'assets/svgs';

const HoverButton = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector(getColorTheme);

  const buttonIcon = {
    'theme-daylight': <SunIcon />,
    'theme-night': <MoonIcon />,
    'theme-sunrise': <SunriseIcon />,
    'theme-sunset': <SunriseIcon />,
  }[colorTheme.color] || <SunriseIcon />;

  const handleThemeButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button type='button' className={styles.hoverButton} onClick={handleThemeButtonClick}>
      {buttonIcon}
    </button>
  );
};

export default HoverButton;

// TODO: 여기 엄청 못생김
