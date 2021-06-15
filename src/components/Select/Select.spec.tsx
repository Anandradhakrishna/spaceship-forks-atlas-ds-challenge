import { shallow, configure } from 'enzyme';
import * as React from 'react';
import Select from './Select';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe(`Select`, () => {
    const optionswithGroup = [
        { value: 'Carrot', addtData: 'Carrots are packed with vitamin A, providing 428% of the daily value', group: 'vegetables' },
        { value: 'Grapes', aaddtData: 'Grapes are convenient, healthy, and particularly high in potassium', group: 'fruits' },
        { value: 'Apple', addtData: 'One of the most popular fruits, apples are chock-full of nutrition.', group: 'fruits' },
        { value: 'Broccoli', addtData: 'It is rich in a sulfur-containing plant compound known as glucosinolate', group: 'vegetables' },
        { value: 'Garlic', addtData: 'Garlic has a long history of use as a medicinal plant, with roots tracing all the way back to ancient China and Egypt', group: 'vegetables' },
        { value: 'Orange', addtData: 'Oranges are known for their high vitamin C content, providing 91% of the DV in a single fruit.', group: 'fruits' },
        { value: 'Pomegranate', addtData: 'Pomegranate contain a lengthy list of beneficial plant compounds, such as flavonoids, tannins, and lignans.', group: 'fruits' },
        { value: 'Spinach', addtData: 'This leafy green tops the chart as one of the healthiest vegetables, thanks to its impressive nutrient profile', group: 'vegetables' }
    ];

    it('should render select component in collapsed view on page load', () => {
        const component = shallow((
            <Select options={optionswithGroup} placeholder={'Choose'} />
        ));
        expect(component).toBeDefined();
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render select component in expanded view with 2 dropdown on click of select', () => {
        const setdisplayOption = jest.fn();
        const component = shallow((
            <Select options={optionswithGroup} placeholder={'Choose'} />
        ));
        expect(component).toBeDefined();
        const selectMenuClick = jest.spyOn(React, "useState");
        selectMenuClick.mockImplementation(displayOption => [displayOption, setdisplayOption]);
        component.find('.select-menu').simulate('click');
        expect(setdisplayOption).toBeTruthy();
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should select a value from dropdown', () => {
        const setdisplayOption = jest.fn();
        const setSelectedOption = jest.fn();
        const component = shallow((
            <Select options={optionswithGroup} placeholder={'Choose'} />
        ));
        expect(component).toBeDefined();
        const selectMenuClick = jest.spyOn(React, "useState");
        selectMenuClick.mockImplementation(displayOption => [displayOption, setdisplayOption]);
        component.find('.select-menu').simulate('click');
        expect(setdisplayOption).toBeTruthy();

        const dropdownClick = jest.spyOn(React, "useState");
        dropdownClick.mockImplementation(selectedOption => [selectedOption, setSelectedOption]);
        component.find('.select-dropdown').find('.option').first().simulate('click');
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should close the dropdown if clicked outside', () => {
        const setdisplayOption = jest.fn();
        const component = shallow((
            <Select options={optionswithGroup} placeholder={'Choose'} />
        ));
        expect(component).toBeDefined();
        const selectMenuClick = jest.spyOn(React, "useState");
        selectMenuClick.mockImplementation(displayOption => [displayOption, setdisplayOption]);
        component.find('.select-menu').simulate('click');
        expect(setdisplayOption).toBeTruthy();
        expect(toJson(component)).toMatchSnapshot();
        component.find('.select-menu').simulate('click');
        expect(toJson(component)).toMatchSnapshot();
    });
});
