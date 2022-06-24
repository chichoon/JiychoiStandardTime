import styles from './mood.module.scss';
import TagSelector from './TagSelector';

const Mood = () => {
  return (
    <div className={styles.moodWrapper}>
      <TagSelector />
    </div>
  );
};

export default Mood;
