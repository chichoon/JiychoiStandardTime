import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loadingAnimation} />
      <p className={styles.loadingString}>로딩중...</p>
    </div>
  );
};

export default Loading;

// TODO: 여기 엄청 못생김
