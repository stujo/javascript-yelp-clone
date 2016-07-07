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
})