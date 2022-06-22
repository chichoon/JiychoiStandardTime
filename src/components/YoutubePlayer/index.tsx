import ReactPlayer from 'react-player/lazy';

interface IProps {
  id: string;
  onEnded?: () => void;
  loop: boolean;
}

const YoutubePlayer = ({ id, onEnded, loop }: IProps) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${id}`}
      loop={loop}
      onEnded={onEnded}
      width='100%'
      height='50%'
    />
  );
};

export default YoutubePlayer;
