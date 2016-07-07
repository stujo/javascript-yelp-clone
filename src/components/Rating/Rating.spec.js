import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Rating from './Rating'

import styles from './styles.module.css'

describe('<Rating />', () => {
    it('shows the rating when present', () => {
        const wrapper = shallow(<Rating rating="4" />)
        expect(wrapper.find(`.${styles.rating}`).text()).to.equal("4");
    });
    it('shows the N/A when no rating present', () => {
        const wrapper = shallow(<Rating rating="" />)
        expect(wrapper.find(`.${styles.rating}`).text()).to.equal("N/A");
    });

    it('renders bottom and top star meters', () => {
        let wrapper = shallow(<Rating rating="4.9" />)
        expect(wrapper.find(`.${styles.top}`).length).to.equal(1);
        expect(wrapper.find(`.${styles.bottom}`).length).to.equal(1);
    })

    it('Shows 92% for a 4.6 star rating', () => {
        let wrapper = shallow(<Rating rating="4.6" />)
        expect(wrapper.find(`.${styles.top}`)).to.have.style("width", "92%");
    })
})