import React, { useState } from 'react';
import '../scss/components/_login.scss';
import myImg from '../static/images/ijaz.jpeg';
import Button from './Button';
import Input from './Input';
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

const Login = () => {

  const [isVisible, setVisible] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => console.log(data);

    const handlerShowPassword = () => setVisible(!isVisible);

    return (
        <div className='container'>
            <div className="wrapper c-wrapper">
                <div className="row g-0">
                    <div className="col-md-5 col-lg-6 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form" className="img-fluid c-wrapper__img" />
                    </div>
                    <div className="col-md-5 col-lg-6 c-wrapper__columns">
                        <div className="c-wrapper__logo">
                            <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
                        </div>
                        <div className="c-wrapper__name">
                            login form
                        </div>
                        <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className={`c-wrapper__form__field ${errors.email && 'border-danger border'}`}>
                                <span className="fa fa-envelope-o c-wrapper__form__field__user"></span>
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    register={register}
                                    errorMsg={errors?.email?.message}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.email?.message}</p>
                            <div className={`c-wrapper__form__field ${errors.password && 'border-danger border'}`}>
                                <span onClick={handlerShowPassword} className={`fa ${isVisible ? 'fa-eye' : 'fa-eye-slash'} c-wrapper__form__field__user`}></span>
                                <Input
                                    type={!isVisible ? "password" : "text"}
                                    autoComplete="off"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    register={register}
                                    errorMsg={errors?.password?.message}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.password?.message}</p>
                            <Button className="btn c-wrapper__form__button" value='Login'></Button>
                        </form>
                        <div className="text-center fs-6">
                            <Link className='c-wrapper__forgot-password' to="/forget-password">Forget password?</Link>
                            <span className='c-wrapper__or'>or</span>
                            <Link className='c-wrapper__signup' to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;