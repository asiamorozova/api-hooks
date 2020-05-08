import React from 'react';
import { shallow } from 'enzyme';
import Quote from './tpQuote';

describe('Quote component', () => {
  it('renders Quote', () => {
    const wrapper = shallow(<Quote 
      quoteTextOnly='some quote'
      persons='log lady'
      profanity='true'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
