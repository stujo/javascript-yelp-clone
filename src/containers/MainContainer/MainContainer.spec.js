import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

import MainContainer from './MainContainer'
import Sidebar from 'components/Sidebar/Sidebar'

import Map, { GoogleApiWrapper } from 'google-maps-react'

describe('<MainContainer />', function() {
let wrapper;
beforeEach(() => {
    wrapper = mount(<MainContainer />)
})

it('Initializes the Sidebar title', () => {
    expect(wrapper.find(Sidebar).props().title).to.eq('Restaurants')
});

it('has a Map component', () => {
    expect(wrapper.find(Map)).to.have.length(1);
});

});
