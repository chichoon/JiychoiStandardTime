import styles from './loadingAnimationBar.module.scss';

const LoadingAnimationBar = () => {
  return (
    <div className={styles.loadingAnimationWrapper}>
      <div className={styles.loadingAnimation} />
      <div className={styles.loadingAnimation} />
      <div className={styles.loadingAnimation} />
    </div>
  );
};

export default LoadingAnimationBar;
