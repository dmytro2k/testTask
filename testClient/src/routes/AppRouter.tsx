import { type FC } from 'react';
import { Route, Routes } from 'react-router';
import ProductsPage from '../pages/Products'

type RouterProps = {};

const Router: FC<RouterProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
};

export default Router;
