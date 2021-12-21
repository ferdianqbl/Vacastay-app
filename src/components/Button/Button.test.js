import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { BrowserRouter as Router } from 'react-router-dom';


test('Should not allowed click button if isDisabled is present', () => {
  const { container } = render(<Button isDisabled></Button>)

  expect(container.querySelector("span.disabled")).toBeInTheDocument(); // apakah ada, jika ada return true
});

test('Should render loading/spiner', () => {
  const { container, getByText } = render(<Button isLoading></Button>)

  expect(getByText(/loading/i));
  expect(container.querySelector("span.sr-only")).toBeInTheDocument();
});

test('Should render <a> tag', () => {
  const { container } = render(<Button type="link" isExternal></Button>)

  expect(container.querySelector("a")).toBeInTheDocument(); // apakah ada, jika ada return true
});

test('Should render <Link> component', () => {
  const { container } = render(<Router><Button href="" type="link"></Button></Router>)

  expect(container.querySelector("a")).toBeInTheDocument(); // apakah ada, jika ada return true
});