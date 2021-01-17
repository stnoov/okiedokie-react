import React from 'react';

import {useFormik} from "formik";

const LoginForm = () => {

    const {handleSubmit, handleChange, values, resetForm} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            console.log('SUBMITTED')
        }})

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h1>Вход</h1>
            <input
                value={values.email}
                onChange={handleChange}
                id='email'
                name='email'
                placeholder='Почта'/>
            <input
                value={values.password}
                onChange={handleChange}
                id='password'
                name='password'
                type='password'
                placeholder='Пароль'/>
            <label className="remember-me">
                <input type="checkbox" />
                Запомнить
            </label>
            <p className='register-link'>Нет аккаунта? <u>Зарегистрироваться</u></p>
            <button className='log-in-button' type='submit' >Войти</button>
        </form>
    );
};

export default LoginForm;
