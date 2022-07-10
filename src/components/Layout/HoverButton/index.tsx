import { useDispatch } from 'react-redux';

import { toggleTheme } from 'states/colorTheme';

import styles from './hoverButton.module.scss';
import { MoonIcon, SunIcon } from 'assets/svgs';

const HoverButton = () => {
  const dispatch = useDispatch();
  const handleThemeButtonClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button type='button' className={styles.hoverButton} onClick={handleThemeButtonClick}>
      <div className={styles.iconWrapper}>
        <SunIcon />
        <MoonIcon />
      </div>
    </button>
  );
};

export default HoverButton;
