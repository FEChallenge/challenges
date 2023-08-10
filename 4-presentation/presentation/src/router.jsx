import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './page/Home';
import Main from './page/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="main" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
