import { Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SellersSyiProps {}

export function SellersSyi(props: SellersSyiProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<h2>This is the sellers-syi root route.</h2>}
      ></Route>
    </Routes>
  );
}

export default SellersSyi;
