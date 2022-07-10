import { ErrorIcon } from 'assets/svgs';
import styles from './error.module.scss';

interface IProps {
  message: string;
}

const Error = ({ message }: IProps) => {
  return (
    <div className={styles.errorWrapper}>
      <ErrorIcon />
      <p className={styles.errorString}>{message}</p>
    </div>
  );
};

export default Error;

// TODO: 여기 엄청 못생김
