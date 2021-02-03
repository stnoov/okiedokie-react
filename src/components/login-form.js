import React from 'react';

import {useFormik} from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import { login } from "../redux/actions/auth";
import {toast} from "react-toastify";

const LoginForm = () => {

    const dispatch = useDispatch();

    const notifyError = () => toast.error("Неверная почта или пароль");

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
                    resetForm()
                    notifyError()
                });
        }})

    if (isLoggedIn) {
        return <Redirect to="/home" />;
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
