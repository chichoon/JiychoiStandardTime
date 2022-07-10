import { useMount } from 'react-use';
import { Navigate, Route, Routes } from 'react-router-dom';
import store from 'store';

import { Layout } from 'components';
import Main from './Main';
import Mood from './Mood';
import Play from './Play';
import Calendar from './Calendar';

const Router = () => {
  useMount(() => {
    const colorTheme = store.get('colorTheme');
    document.documentElement.setAttribute('color-theme', colorTheme ?? 'theme-sunrise');
  });
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='main' />} />
        <Route path='main' element={<Main />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='mood' element={<Mood />} />
        <Route path='play/:index' element={<Play />} />
        <Route path='*' element={<Navigate replace to='main' />} />
      </Route>
    </Routes>
  );
};

// TODO: 나만의 재생목록

export default Router;
