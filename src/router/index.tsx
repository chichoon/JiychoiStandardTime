import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import Main from './Main';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate replace to='main' />} />
        <Route path='main' element={<Main />} />
        <Route path='mood' element={<Main />} />
        <Route path='custom' element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;
