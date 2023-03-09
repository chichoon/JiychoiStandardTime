import { FallbackProps } from 'react-error-boundary';
import cx from 'classnames';

import { ErrorIcon } from 'assets/svgs';

import styles from './errorFallback.module.scss';

export const ErrorFallback = ({ error }: FallbackProps) => {
  const { message } = error;
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorComponentBox}>
        <ErrorIcon />
      </div>
      <div className={styles.errorInformation}>
        <p className={styles.playerDate}>#0 Invalid Date</p>
        <div className={cx(styles.errorInfo, 'currentSongInfo')}>
          <dt>Error!</dt>
          <dd>오류!</dd>
        </div>
        <p className={styles.errorMessage}>{message}</p>
      </div>
    </div>
  );
};
