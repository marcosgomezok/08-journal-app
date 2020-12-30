import React from 'react';
import {mount} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom'


import { LoginScreen } from "../../../components/auth/LoginScreen"
import { startGoogleLogin } from '../../../actions/auth';
import { startLoginEmailPassword } from './../../../actions/auth';

jest.mock('../../../actions/auth',()=>({
    startGoogleLogin:  jest.fn(),
    startLoginEmailPassword: jest.fn()
}))
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

store.dispatch = jest.fn();

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
        jest.clearAllMocks();
    })
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de disparar la accion de startGoogleLogin', () => {
        
        wrapper.find('.google-bt').prop('onClick')();

        expect(startGoogleLogin).toHaveBeenCalled();
    })

    test('debe de disparar el startLogin con los respectivos argumentos ', () => {
       
          
         wrapper.find('form').prop('onSubmit')({preventDefault(){}});

        expect(startLoginEmailPassword).toHaveBeenLastCalledWith('journal-app@hotmail.com','123456')
 

    })
    
    
    
    //npm install --save react@16.13.1 react-dom@16.13.1 //para que mount funcione
    //npm install --save react@17.0.1 react-dom@17.0.1
    
})
