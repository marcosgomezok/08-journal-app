import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );


    //console.log(msgError)

    const [formValues, handleInputChange] = useForm({
        name: 'Marcos',
        email: 'marcos_go2015@hotmail.com',
        password: '123',
        password2: '123'
    })
    const {name,email,password, password2} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        //console.log(name, email, password, password2);

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
        }
        


    }



    const isFormValid = () =>{
        if(name.trim().length===0){
            dispatch(setError('Name invalid'))
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email invalid'))
            return false;
        }else if(password !== password2 || password.length<5){
            dispatch(setError('Password should be at least 5 character and match each other'))
            return false
        }
        dispatch(removeError())
        return true
    }
 

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
                {   
                    msgError && 
                    (<div className="auth__alert-error">{msgError}</div>)
                }
                <input type = "text" placeholder= "Name" name= "name" autoComplete="off "className="auth__input" value={name} onChange={handleInputChange}/>
                <input type = "text" placeholder= "Email" name= "email" autoComplete="off "className="auth__input"value={email} onChange={handleInputChange}/>
                <input type = "password" placeholder= "Password" name= "password" className="auth__input"value={password} onChange={handleInputChange}/>
                <input type = "password" placeholder= "Confirm password" name= "password2" className="auth__input"value={password2} onChange={handleInputChange}/>
                <button type="submit" className = "btn btn-primary btn-block mb-5" >Register</button>

                

                <Link to="/auth/register" className="link"
                >
                    Already registred?
                </Link>

            </form>
        </>
    )
}