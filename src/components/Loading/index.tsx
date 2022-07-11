import cx from 'classnames';

import LoadingAnimationBar from './LoadingAnimationBar';

import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loadingAnimationBox}>
        <LoadingAnimationBar />
      </div>
      <div className={styles.loadingInformation}>
        <p className={styles.playerDate}>#∞</p>
        <div className={cx(styles.loadingInfo, 'currentSongInfo')}>
          <dt>Loading...</dt>
          <dd>잠시만 기다려 주세요</dd>
        </div>
        <p className={styles.loadingMessage}>로딩중...</p>
      </div>
      <p className={styles.loadingString} />
    </div>
  );
};

export default Loading;
