import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './Header'

describe('<Header />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    });

    it('contains a title component with yelp', () => {
        expect(wrapper.find('h1').first().text())
            .to.equal('Kelp Clone')
    });

    it('contains a link to the map', () => {
        const link = wrapper.find('section Link').first();
        expect(link.html()).to.equal('<a>Map</a>')
    });
})