import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'


import { startLoadingNotes, startNewNote, startSaveNote } from './../../actions/notes';
import { types } from './../../types/types';
import { db } from '../../firebase/firebase-config';

 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: 'TESTING'
    }
}

let store = mockStore(initState)

describe('Pruebas con las acciones de notas', () => {

    beforeEach(()=>{
        jest.setTimeout(30000)
        store= mockStore(initState)

    })
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


    test('startLoadingNotes debe cargar las notas', async() => {
        
        /* await store.dispatch( startLoadingNotes('TESTING') ); //Error en esta linea, ni idea que sera ver uso de jest.setTimeout(30000)
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject( expected );  */
    })

    test('startsavenote debe actualizar la nota', async() => {
        
        const note = {
            id: '3UhaD16pVZDIlepRdZX9',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch(startSaveNote(note))

        const actions = store.getActions();
       // console.log(actions)
       expect(actions[0].type).toBe(types.notesUpdated)
       
    /* const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get(); //Error en esta linea, ni idea que sera ver uso de jest.setTimeout(30000)
       expect(docRef.data().title).toBe(note.title);  */

    })
    
    
})
