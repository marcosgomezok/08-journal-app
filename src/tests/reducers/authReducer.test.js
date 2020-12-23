
import { authReducer } from './../../reducers/authReducer';
import { types } from './../../types/types';

describe('Pruebas en el authReducer', () => {
    
    test('debe de realizar el login', () => {
        
        const initState = {};
        
        const action={
            type: types.login,
            payload:{
                uid: 'abc',
                displayName: 'Marcos'
            }
        }
        const state = authReducer(initState,action)

        expect(state).toEqual({uid:'abc', name:'Marcos'})

    })
    
    test('debe de realizar el logout', () => {
        
        const initState = {
            uid: '123456',
            name: 'Marcos'
        };
        
        const action={
            type: types.logout
        }

        const state = authReducer(initState,action)

        expect(state).toEqual({})

    })

    test('no debe de hacer cambios en el state', () => {
        
        const initState = {
            uid: '123456',
            name: 'Marcos'
        };
        
        const action={
            type: 'tipoDesconocido'
        }

        const state = authReducer(initState,action)

        expect(state).toEqual(initState)

    })
})
