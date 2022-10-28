import { render } from '@testing-library/react';

import BuyersVip from './buyers-vip';

describe('BuyersVip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BuyersVip />);
    expect(baseElement).toBeTruthy();
  });
});
