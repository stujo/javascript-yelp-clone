import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import Listing from './Listing'
import Item from './Item'
import styles from './styles.module.css'

describe('<Listing />', () => {
    let wrapper;
    const places = [{
        name: 'Chicago'
    }, {
        name: "San Francisco"
    }];

    beforeEach(() => {
        wrapper = shallow(<Listing title="Cafes" places={ places } />)
    });

    it('wraps the component in a listing css class', () => {
        expect(wrapper.hasClass(styles.listing)).to.equal(true);
    })

    it('has an item for each place in the places prop', () => {
        expect(wrapper.find(Item).length)
            .to.equal(places.length);
    })

    it('has a title', () => {
        expect(wrapper.find(`.${styles.title}`).text())
            .to.equal('Cafes');
    })
})