import { Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SellersSvipProps {}

export function SellersSvip(props: SellersSvipProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<h2>This is the sellers-svip root route.</h2>}
      ></Route>
    </Routes>
  );
}

export default SellersSvip;
