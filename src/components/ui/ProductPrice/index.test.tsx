import { render, screen, fireEvent } from '@testing-library/react';

import { ProductPrice } from '.';

describe('ProductPrice component test', () => {
  it('should renders the product price correctly', () => {
    render(<ProductPrice price='100'/>)
  })
})