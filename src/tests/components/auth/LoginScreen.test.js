import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom'


import { LoginScreen } from "../../../components/auth/LoginScreen"


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth:{},
    ui:{
        loading:false,
        msgError:null
    }
}

let store = mockStore(initState)

const wrapper = mount(
    <Provider store ={store}>
        <MemoryRouter>
        <LoginScreen/>

        </MemoryRouter>

    </Provider>
)

describe('Pruebas en LoginScreen', () => {

    beforeEach(()=>{
        store = mockStore(initState)
    })
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    
    //npm install --save react@16.13.1 react-dom@16.13.1 //para que mount funcione
    //npm install --save react@17.0.1 react-dom@17.0.1
    
})
