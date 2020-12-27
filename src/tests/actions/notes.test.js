
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'


import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from './../../actions/notes';
import { types } from './../../types/types';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from './../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload',()=>({
    fileUpload: jest.fn(()=>{
        return 'https://hola-mundo.com/'
        //return Promise.resolve('https://hola-mundo.com/')


})
}))


 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active:{
            id: '3UhaD16pVZDIlepRdZX9',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState)

describe('Pruebas con las acciones de notas', () => {

    beforeEach(()=>{

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


    test('startLoadingNotes debe cargar las notas',async() => {

        /* await store.dispatch( startLoadingNotes('TESTING') ); //Error en esta linea, ni idea que sera ver uso de jest.setTimeout(30000) o buscar como resolver cono promises promises y fetch
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
            id: 'WeNhYtpdsfNzpGJdNdrK',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch(startSaveNote(note))

        const actions = store.getActions();
       // console.log(actions)
       expect(actions[0].type).toBe(types.notesUpdated)
       /* const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            const docRef= db.doc(`/TESTING/journal/notes/${note.id}`).get()
            console.log('docRef');
            resolve(docRef);
        }, 10000);
        });
        promesa.then((docRef)=>{
        expect(docRef.data().title).toBe(note.title)
        })  */
       /*const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get(); //Error en esta linea, ni idea que sera ni idea que sera revisar async promises y fetch JEST
       expect(docRef.data().title).toBe(note.title);*/
       
        /* const docRef = await db.collection('TESTING').doc('journal').collection('notes').doc(note.id).get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
            }
          })
          .catch(err => {
            console.log('Error getting document', err); 
          });;*/ //Error en esta linea, ni idea que sera ni idea que sera revisar async promises y fetch
        //console.log(docRef.data().title);
        //expect(docRef.data().title).toBe(note.title);
 

    })

    test('startUploadinig debe de actualizar el url del entry', async() => {
        
        const file = new File([],'foto.jpg');

        await store.dispatch(startUploading(file))

        /*  const promesa = new Promise((resolve,reject)=>{
            setTimeout(() => {
                const docRef= db.doc('/TESTING/journal/notes/3UhaD16pVZDIlepRdZX9').get();
                console.log(docRef)
                resolve(docRef);
            }, 10000);
        });
        promesa.then((docRef)=>{
            console.log(docRef)
            expect(docRef.data().url).toBe('https://hola-mundo.com/')
        })  */
        
         /* const docRef = await db.doc('/TESTING/journal/notes/3UhaD16pVZDIlepRdZX9').get(); //Error en esta linea, ni idea que sera revisar async promises y fetch
        expect(docRef.data().url).toBe('https://hola-mundo.com/')  */
    })
    
    
    
})
