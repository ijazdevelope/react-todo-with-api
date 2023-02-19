import React, { useState } from 'react';
import myImg from '../static/images/ijaz.jpeg';
import Input from './Input';
import '../scss/components/_login.scss';
import Button from './Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required('Email is required')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format'),
  password: yup.string().required()
    .min(4, 'Password length should be at least 4 characters')
    .max(8, 'Password length should be at least 8 characters'),
  cpassword: yup.string().required('Confirm password is a required field.')
    .min(4, 'Password length should be at least 4 characters')
    .max(8, 'Password length should be at least 8 characters')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .oneOf([yup.ref("password")], "Passwords do not match")
}).required();

const Signup = () => {
  const [isVisible, setVisible] = useState(false);

  const signupImg = 'https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(errors);

  const handlerShowPassword = () => setVisible(!isVisible);

  return (
    <div className='container'>
      <div className="wrapper c-wrapper">
        <div className="row g-0">
          <div className="col-md-5 col-lg-6 d-none d-md-block">
            <img src={signupImg}
              alt="signup form" className="img-fluid c-wrapper__img" />
          </div>
          <div className="col-md-5 col-lg-6 c-wrapper__columns">
            <div className="c-wrapper__logo">
              <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
            </div>
            <div className="c-wrapper__name">
              registration
            </div>
            <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="c-wrapper__form__field">
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
              <div className="c-wrapper__form__field">
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
              <div className="c-wrapper__form__field">
                <span onClick={handlerShowPassword} className={`fa ${isVisible ? 'fa-eye' : 'fa-eye-slash'} c-wrapper__form__field__user`}></span>
                <Input
                  type={!isVisible ? "password" : "text"}
                  autoComplete="off"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                  register={register}
                  errorMsg={errors?.cpassword?.message}
                />
              </div>
              <p className='c-wrapper__form__error'>{errors.cpassword?.message}</p>
              <Button className="btn c-wrapper__form__button" value='signup'></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;