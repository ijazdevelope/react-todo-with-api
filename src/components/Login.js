import React from 'react';
import '../scss/components/_login.scss';
import myImg from '../static/images/ijaz.jpeg';
import Button from './Button';
import Input from './Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.string().required(),
    // age: yup.number().positive().integer().required(),
}).required();

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data, errors, 'custom data');

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
                            <div className="c-wrapper__form__field">
                                <span className="fa fa-user c-wrapper__form__field__user"></span>
                                <Input
                                    className='c-wrapper__form__field__input'
                                    type="text"
                                    autoComplete="off"
                                    name="userName"
                                    id="userName"
                                    placeholder="Username"
                                    {...register("userName")}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.userName?.message}</p>
                            <div className="c-wrapper__form__field">
                                <span className="fa fa-key c-wrapper__form__field__user"></span>
                                <Input
                                    className='c-wrapper__form__field__input'
                                    type="password"
                                    autoComplete="off"
                                    name="password"
                                    id="pwd"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "required",
                                        minLength: {
                                            value: 5,
                                            message: "min length is 5"
                                        },
                                        maxLength: {
                                            required: true,
                                            value: 10,
                                            message: "Max length exceeded to 10"
                                        }
                                    })}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.password?.message}</p>
                            <Button className="btn c-wrapper__form__button" value='Login'></Button>
                        </form>
                        <div className="text-center fs-6">
                            <a className='c-wrapper__forgot-password' href="#">Forget password?</a> or <a className='c-wrapper__signup' href="#">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;