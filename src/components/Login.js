import React from 'react';
import '../scss/components/_login.scss';
import myImg from '../static/images/ijaz.jpeg';
import Button from './Button';
import Input from './Input';

const Login = () => {
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
                        <form className="c-wrapper__form">
                            <div className="c-wrapper__form__field">
                                <span className="fa fa-user c-wrapper__form__field__user"></span>
                                <Input className='c-wrapper__form__field__input' type="text" autoComplete="off" name="userName" id="userName" placeholder="Username" />
                            </div>
                            <div className="c-wrapper__form__field">
                                <span className="fa fa-key c-wrapper__form__field__user"></span>
                                <Input className='c-wrapper__form__field__input' type="password" autoComplete="off" name="password" id="pwd" placeholder="Password" />
                            </div>
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