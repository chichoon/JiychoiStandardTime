import styles from './loadingFallback.module.scss';

export const LoadingFallback = () => {
  return (
    <div className={styles.loadingWrapper}>
      <span>로딩중...</span>
    </div>
  );
};
