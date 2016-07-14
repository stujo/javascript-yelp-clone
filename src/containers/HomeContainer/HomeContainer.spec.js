import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

import HomeContainer from './HomeContainer'
import Sidebar from 'components/Sidebar/Sidebar'

import Map, { GoogleApiWrapper } from 'google-maps-react'

describe('<HomeContainer />', function() {
let wrapper;
beforeEach(() => {
    wrapper = mount(<HomeContainer />)
})

it('Initializes the Sidebar title', () => {
    expect(wrapper.find(Sidebar).props().title).to.eq('Restaurants')
});

it('has a Map component', () => {
    expect(wrapper.find(Map)).to.have.length(1);
});

});
