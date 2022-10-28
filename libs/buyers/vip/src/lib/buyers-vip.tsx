import { Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface BuyersVipProps {}

export function BuyersVip(props: BuyersVipProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<h2>This is the buyers-vip root route.</h2>}
      ></Route>
    </Routes>
  );
}

export default BuyersVip;
