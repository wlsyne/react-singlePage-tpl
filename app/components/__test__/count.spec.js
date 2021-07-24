import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';

import Count from '../Count';
describe('测试Count组件', () => {
  it('测试组件的渲染', () => {
    act(() => {
      render(<Count />);
    });
    const div = screen.queryByTestId('count');
    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent('0');
  });

  it('测试组件点击行为', () => {
    act(() => {
      render(<Count />);
    });
    const div = screen.queryByTestId('count');
    fireEvent.click(div);
    expect(div).toHaveTextContent('1');
  });
});
