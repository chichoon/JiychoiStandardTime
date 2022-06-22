import Layout from 'components';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
