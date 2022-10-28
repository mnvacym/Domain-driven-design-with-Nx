import { render } from '@testing-library/react';

import BuyersLrp from './buyers-lrp';

describe('BuyersLrp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuyersLrp />);
    expect(baseElement).toBeTruthy();
  });
});
