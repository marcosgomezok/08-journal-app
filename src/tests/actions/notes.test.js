import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { db } from '../../firebase/firebase-config';
import { startNewNote } from './../../actions/notes';
import { types } from './../../types/types';
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
    auth: {
        uid: 'TESTING'

    }
})

describe('Pruebas con las acciones de notas', () => {
    
    test('debe de crear una nueva nota StartNewNote', async() => {
        
        await store.dispatch(startNewNote());

        const actions = store.getActions();
        //console.log(actions)

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
              }
        })
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${docId}`).delete();
    })
    
})
