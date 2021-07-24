import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Title from '../Title';

describe('测试Title组件', () => {
  it('测试组件的渲染', () => {
    act(() => {
      render(<Title />);
    });
    expect(screen.queryByText("Hello! It's")).toBeInTheDocument();
  });
  it('测试组件的props', () => {
    act(() => {
      render(<Title name="Alan" />);
    });
    expect(screen.queryByText("Hello! It's Alan")).toBeInTheDocument();
  });
});
