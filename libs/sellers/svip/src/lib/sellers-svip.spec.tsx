import { render } from '@testing-library/react';

import SellersSvip from './sellers-svip';

describe('SellersSvip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SellersSvip />);
    expect(baseElement).toBeTruthy();
  });
});
