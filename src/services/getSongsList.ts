import axios from 'axios';

const getSongsList = () =>
  axios.get('jst-songlist.json').then((response) => {
    return response.data;
  });

export default getSongsList;
