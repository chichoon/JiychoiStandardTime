import cx from 'classnames';

import { PlayerComponent } from 'components';

const TEST_SONG = {
  index: 16,
  title: "For What It's Worth",
  artist: 'Liam Gallagher',
  comment: '🌄 희망찬 아침 입니다 🌄 \n지금 너무 힘들더라도 이 또한 지나가리라는 것을 잊지 마세요 🕊',
  id: 'SDrPghDvYA4',
  date: '2021-09-16 06:36',
  tagList: ['peaceful', 'slow', 'band', 'man', 'orchestra'],
};

const Main = () => {
  return (
    <div className={cx('innerContainer')}>
      <PlayerComponent song={TEST_SONG} loop />
    </div>
  );
};

export default Main;
