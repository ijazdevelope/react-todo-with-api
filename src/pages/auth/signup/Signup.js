import React, { useState } from 'react';
import myImg from '../../../static/images/ijaz.jpeg';
import Input from '../../../components/Input';
import '../../../scss/components/_login.scss';
import Button from '../../../components/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom';

const schema = yup.object({
  fname: yup.string().required('First name is required.')
    .min(4, 'Password length should be at least 4 characters'),
  lname: yup.string().required('Last name is required.')
    .min(4, 'Password length should be at least 4 characters'),
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

  const { handleSubmit, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(errors);

  const handlerShowPassword = () => setVisible(!isVisible);

  return (
    <div className='container'>
      <div className="wrapper c-wrapper">
        <div className="row g-0">
          <div className="col-12 col-lg-6 d-none d-md-block">
            <img src={signupImg}
              alt="signup form" className="img-fluid c-wrapper__img" />
          </div>
          <div className="col-12 col-lg-6 c-wrapper__columns">
            <div className="c-wrapper__logo">
              <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
            </div>
            <div className="c-wrapper__name">
              registration
            </div>
            <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
              <div className='d-md-flex justify-content-between'>
                <div>
                  <div className={`c-wrapper__form__field ${errors.fname && 'border-danger border'}`}>
                    <span className="fa fa-user c-wrapper__form__field__user"></span>
                    <Input
                      type="text"
                      autoComplete="off"
                      name="fname"
                      id="fname"
                      placeholder="First name"
                      register={register}
                      errorMsg={errors?.fname?.message}
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.fname?.message}</p>
                </div>
                <div>
                  <div className={`c-wrapper__form__field ${errors.lname && 'border-danger border'}`}>
                    <span className="fa fa-user c-wrapper__form__field__user"></span>
                    <Input
                      type="text"
                      autoComplete="off"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                      register={register}
                      errorMsg={errors?.lname?.message}
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.lname?.message}</p>
                </div>
              </div>
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
                  setValue={setValue}
                />
              </div>
              <p className='c-wrapper__form__error'>{errors.email?.message}</p>
              <div className='d-md-flex justify-content-between'>
                <div>
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
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.password?.message}</p>
                </div>
                <div>
                  <div className={`c-wrapper__form__field ${errors.cpassword && 'border-danger border'}`}>
                    <span onClick={handlerShowPassword} className={`fa ${isVisible ? 'fa-eye' : 'fa-eye-slash'} c-wrapper__form__field__user`}></span>
                    <Input
                      type={!isVisible ? "password" : "text"}
                      autoComplete="off"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm password"
                      register={register}
                      errorMsg={errors?.cpassword?.message}
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.cpassword?.message}</p>
                </div>
              </div>
              <Button className="btn c-wrapper__form__button" value='sign up'></Button>
                <p className='c-wrapper__form__account'>Already have an account? <Link to='/' className='c-wrapper__form__account__link'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;