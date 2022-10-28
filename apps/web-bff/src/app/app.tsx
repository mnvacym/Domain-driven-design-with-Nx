import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BuyersVip } from '@bnl-fe/buyers/vip';
import { BuyersLrp } from '@bnl-fe/buyers/lrp';
import { SellersSvip } from '@bnl-fe/sellers/svip';
import { SellersSyi } from '@bnl-fe/sellers/syi';

export function App() {
  return (
    <Router>
      <div>
        <h1>
          Welcome to BNL-FE!
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/vip">Vip</Link>
            </li>
            <li>
              <Link to="/lrp">Lrp</Link>
            </li>
            <li>
              <Link to="/svip">S-Vip</Link>
            </li>
            <li>
              <Link to="/syi">Syi</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/vip" element={<BuyersVip />}></Route>
          <Route path="/Lrp" element={<BuyersLrp />}></Route>
          <Route path="/svip" element={<SellersSvip />}></Route>
          <Route path="/syi" element={<SellersSyi />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
