import cx from 'classnames';

import { ErrorIcon } from 'assets/svgs';
import styles from './error.module.scss';

interface IProps {
  message: string;
}

const Error = ({ message }: IProps) => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorComponentBox}>
        <ErrorIcon />
      </div>{' '}
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

export default Error;

// TODO: 여기 엄청 못생김
