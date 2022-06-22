import Youtube, { YouTubeEvent } from 'react-youtube';

import styles from './youtubePlayer.module.scss';

interface IProps {
  id: string;
  onEnd: ((event: YouTubeEvent<number>) => void) | undefined;
}

const YoutubePlayer = ({ id, onEnd }: IProps) => {
  return <Youtube videoId={id} id='youtube-player' className={styles.youtubePlayerWrapper} onEnd={onEnd} />;
};

export default YoutubePlayer;
