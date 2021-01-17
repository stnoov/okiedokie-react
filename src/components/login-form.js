import React from 'react';

import {useFormik} from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { login } from "../redux/actions/auth";

const LoginForm = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);

    const {handleSubmit, handleChange, values, resetForm} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            setLoading(true);
            dispatch(login(values.email, values.password)).then(() => {
                window.location.reload();
            })
                .catch(() => {
                    setLoading(false);
                });
        }})

    if (isLoggedIn) {
        return <Redirect to="/profile" />;
    }

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
            <button className='log-in-button' type='submit' disabled={loading} >
                {loading && (
                    <span className="spinner-border spinner-border-sm" />
                )}
                Войти</button>
        </form>
    );
};

export default LoginForm;
