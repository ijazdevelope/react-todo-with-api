import React from 'react';
import Input from './Input';
import Button from './Button';
import myImg from '../static/images/ijaz.jpeg';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object({
    email: yup.string().required('Email is required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format'),
    password: yup.string().required()
        .min(4, 'Password length should be at least 4 characters')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
}).required();

const ForgetPassword = () => {

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);

  return (
    <div className='container'>
            <div className="wrapper c-wrapper">
                <div className="row g-0">
                    <div className="col-md-5 col-lg-6 d-none d-md-block">
                        <img src="https://images.unsplash.com/photo-1676302529641-a13f926bcc8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="login form" className="img-fluid c-wrapper__img" />
                    </div>
                    <div className="col-md-5 col-lg-6 c-wrapper__columns">
                        <div className="c-wrapper__logo">
                            <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
                        </div>
                        <div className="c-wrapper__name">
                            <h3 className='c-wrapper__name__title'>Find Your Account</h3>
                            <p className='c-wrapper__name__text'>Please enter your email address to search for your account.</p>
                        </div>
                        <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="c-wrapper__form__field">
                                <span className="fa fa-envelope-o c-wrapper__form__field__user"></span>
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    register={register}
                                    errorMsg={errors?.email?.message}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.email?.message}</p>
                            <Button className="btn c-wrapper__form__button" value='Submit'></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ForgetPassword