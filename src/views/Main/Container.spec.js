import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'

import Container from './Container'

import Map, { GoogleApiWrapper } from 'google-maps-react'

describe('<Container />', function() {
let wrapper;
beforeEach(() => {
    wrapper = mount(<Container />)
})

it('has a title', () => {
    expect(wrapper.find("h1").text()).to.eq('The Map')
});

it('has a Map component', () => {
    expect(wrapper.find(Map)).to.have.length(1);
});


});
