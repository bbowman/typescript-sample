import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list app', () => {
  render(<App />);
  const titleElement = screen.getByText(/todo list/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders add todo form', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add a new todo/i);
  const buttonElement = screen.getByRole('button', { name: /add/i });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('renders empty state message', () => {
  render(<App />);
  const emptyMessage = screen.getByText(/no todos yet/i);
  expect(emptyMessage).toBeInTheDocument();
});
