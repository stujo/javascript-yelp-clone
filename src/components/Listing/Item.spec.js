import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Item from './Item'
import Rating from 'components/Rating/Rating'

import styles from './styles.module.css'

describe('<Item />', () => {
    let wrapper;
    const place = {
        name: 'San Francisco'
    }
    beforeEach(() => {
        wrapper = shallow(<Item place={ place } />)
    });

    it('contains an h3 title', () => {
        expect(wrapper.find('h3').first().text())
            .to.equal(place.name)
    });

    it('wraps the component with an .item css class', () => {
        expect(wrapper.hasClass(styles.item)).to.equal(true);
    })

    it('contains a rating', () => {
        expect(wrapper.find(Rating).length).to.equal(1);
    });
})