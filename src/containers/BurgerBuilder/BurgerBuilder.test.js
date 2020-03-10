import React from 'react';
import { Provider } from 'react-redux'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import  BurgerBuilder  from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    const props = {
        bacon: 1,
        cheese: 0,
        meat: 0,
        salad: 0
    };
    beforeEach(() => {
        wrapper = shallow(<Burger />);
    });



    it('should render <Burger/> when receiving ingredients', () => {
        wrapper.setProps(props);
        expect(wrapper.find(Burger )).toHaveLength(1);
    });
});

// import React from 'react';
//
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// import { BurgerBuilder } from './BurgerBuilder';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
//
// configure({adapter: new Adapter()});
//
// describe('<BurgerBuilder />', () => {
//     let wrapper;
//
//     beforeEach(() => {
//         wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
//     });
//
//     it('should render <BuildControls /> when receiving ingredients', () => {
//         wrapper.setProps({ings: {salad: 0}});
//         expect(wrapper.find(BuildControls)).toHaveLength(1);
//     });
// });