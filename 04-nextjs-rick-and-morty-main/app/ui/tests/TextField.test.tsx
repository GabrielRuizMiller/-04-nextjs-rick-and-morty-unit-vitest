// src/tests/TextField.test.tsx
import React from 'react';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextField } from '../TextField';

test('render as input', () => {
  render(<TextField placeholder="Type here..." />);
  const inputElement = screen.getByPlaceholderText('Type here...');
  expect(inputElement).toBeInTheDocument();
});
