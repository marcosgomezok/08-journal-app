import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { JournalEntry } from './../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

store.dispatch = jest.fn();

const nota = {
    id: 1,
    date: 2,
    title: 'hello',
    body: 'world',
    url: 'httos://.youtube.com/x5d4sd'
}

const wrapper = mount(
    <Provider store ={store}>

        <JournalEntry {...nota}/>

    </Provider>
)




describe('Prueba en <JournalEntry/>', () => {
    

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de activar la nota', () => {
        wrapper.find('.journal__entry').prop('onClick')();

        //expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(activeNote(nota.id,{...nota}));
    })
    
    
})
