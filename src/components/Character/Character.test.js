import { render, screen } from '@testing-library/react';
import Character from './Character';

test('renders the Character images', () => {
  const container = render(<Character head="dog-head" body="dress-middle" legs="dog-pants" />);
  expect(container).toMatchSnapshot();
});
