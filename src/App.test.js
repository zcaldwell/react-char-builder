import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home/Home';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(<Home />);
  expect(linkElement).toMatchSnapshot();
});
