import cx from 'classnames';

import { TriangleIcon } from 'assets/svgs';

import styles from './tooltip.module.scss';

interface Props {
  tooltipString: string;
  position: 'bottomLeft' | 'topMiddle';
  isShown: boolean;
}

const Tooltip = ({ tooltipString, position, isShown }: Props) => {
  return (
    <div className={cx(styles.tooltipWrapper, styles[position], { [styles.isShown]: isShown })}>
      <TriangleIcon className={cx(styles.triangle)} />
      <div className={styles.tooltipContainer}>{tooltipString}</div>
    </div>
  );
};

export default Tooltip;
