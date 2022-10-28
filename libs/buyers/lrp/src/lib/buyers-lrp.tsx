import { Route, Routes } from 'react-router-dom';
// import { SellersSvip } from '@bnl-fe/sellers/svip';

/* eslint-disable-next-line */
export interface BuyersLrpProps {}

export function BuyersLrp(props: BuyersLrpProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<h2>This is the buyers-lrp root route.</h2>}
      ></Route>
      {/* <Route path="/svip" element={<SellersSvip />}></Route> */}
    </Routes>
  );
}

export default BuyersLrp;
