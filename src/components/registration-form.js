import React from 'react';
import {Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

import { register } from "../redux/actions/auth";

import ReportProblemIcon from '@material-ui/icons/ReportProblem';

import {useFormik} from "formik";
import * as Yup from "yup";

import { toast } from 'react-toastify';



const RegistrationForm = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const notify = () => toast("Регистрация прошла успешно!");

    const notifyError = () => toast.error("Данная почта уже зарегистрирована!");

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            age: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().max(100, 'Имя слишком длинное!').required('Пожалуйста, укажите имя.'),
            last_name: Yup.string().max(100, 'Фамилия слишком длинная!').required('Пожалуйста, укажите фамилию.'),
            age: Yup.number().required('Пожалуйста, укажите возраст.'),
            email: Yup.string().email('Неверная почта.').max(250, 'Почта слишком длинная!').required('Пожалуйста, укажите почту.'),
            password: Yup.string().max(250, 'Пароль слишком длинный!').required('Пожалуйста, укажите пароль.'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать.')
        }),
        onSubmit: () => {
            dispatch(register(values.email, values.first_name, values.last_name, values.age,0, values.password))
                .then(() => {
                    history.push("/");
                    notify()
                })
                .catch(() => {
                    notifyError()
                });
        }
    })


    return (
        <form className='registration-form container' onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
            <Row>
                <Col className='registration-left-column'>
                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            id='email'
                            name='email'
                            placeholder='Почта'/>

                        {touched.email && errors.email ? (
                            <div className='input-errors'><ReportProblemIcon className='report-error-icon'/>{errors.email}</div>
                        ) : null}
                    </label>

                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.first_name}
                            onChange={handleChange}
                            id='first_name'
                            name='first_name'
                            placeholder='Имя'/>
                        {errors.first_name && touched.first_name && errors.first_name ? (
                            <div className='input-errors'><ReportProblemIcon className='report-error-icon'/>{errors.first_name}
                            </div>
                        ) : null}
                    </label>

                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.last_name}
                            onChange={handleChange}
                            id='last_name'
                            name='last_name'
                            placeholder='Фамилия'/>

                        {touched.last_name && errors.last_name ? (
                            <div className='input-errors'><ReportProblemIcon className='report-error-icon'/>{errors.last_name}</div>
                        ) : null}
                    </label>

                </Col>
                <Col className='registration-right-column'>
                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.age}
                            onChange={handleChange}
                            id='age'
                            name='age'
                            placeholder='Возраст'/>
                        {touched.age && errors.age ? (
                            <div className='input-errors'><ReportProblemIcon className='report-error-icon'/>{errors.age}</div>
                        ) : null}
                    </label>

                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Пароль'/>

                        {touched.password && errors.password && (
                            <div className='input-errors'><ReportProblemIcon className='report-error-icon'/>{errors.password}</div>
                        )}
                    </label>

                    <label>
                        <input
                            onBlur={handleBlur}
                            value={values.confirm_password}
                            onChange={handleChange}
                            id='confirm_password'
                            name='confirm_password'
                            type='password'
                            placeholder='Повторите пароль'/>

                        {touched.confirm_password && errors.confirm_password && (
                            <div className='input-errors'><ReportProblemIcon
                                className='report-error-icon'/>{errors.confirm_password}
                            </div>
                        )}
                    </label>

                </Col>
            </Row>
            <Link to='/'>
                <button className='back-button'>Вернуться назад</button>
            </Link>

            <button className='register-button' type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegistrationForm;
