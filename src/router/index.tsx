import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import Main from './Main';
import Mood from './Mood';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='main' />} />
        <Route path='main' element={<Main />} />
        <Route path='calendar' element={<Main />} />
        <Route path='mood' element={<Mood />} />
      </Route>
    </Routes>
  );
};

// TODO: 나만의 재생목록

export default Router;
