import { render, screen } from '@testing-library/react';
import Picker from './Picker';

test('renders the Picker panel', () => {
  const container = render(
    <Picker
      head="dog-head"
      setHead="dog-head"
      setHeadcount="0"
      body="dress-body"
      setBody="dress-body"
      setBodyCount="0"
      legs="dog-pants"
      setLegs="dog-pants"
      setLegsCount="0"
      catchPhrase="ok"
      setCatchPhrase="ok"
      setCatchList="[]"
    />
  );
  expect(container).toMatchSnapshot();
});
