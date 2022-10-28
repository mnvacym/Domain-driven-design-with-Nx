import { render } from '@testing-library/react';

import SellersSyi from './sellers-syi';

describe('SellersSyi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SellersSyi />);
    expect(baseElement).toBeTruthy();
  });
});
