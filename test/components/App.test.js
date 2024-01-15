import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

test('Should render App component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

// More tests ...
