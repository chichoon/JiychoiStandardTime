import Layout from 'components';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;
