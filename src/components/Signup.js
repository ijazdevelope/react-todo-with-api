import React from 'react';
import myImg from '../static/images/ijaz.jpeg';
import Input from './Input';
import '../scss/components/_login.scss';
import Button from './Button';
import Anchor from './Button';

const Signup = () => {
  const signupImg = 'https://images.unsplash.com/photo-1674773751169-eebaf7d3e9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

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
            <form className="c-wrapper__form">
              <div className="c-wrapper__form__field">
                <span className="fa fa-user c-wrapper__form__field__user"></span>
                <Input
                  className='c-wrapper__form__field__input'
                  type="text"
                  autoComplete="off"
                  name="fname"
                  id="fname"
                  placeholder="First name"
                />
              </div>
              <div className="c-wrapper__form__field">
                <span className="fa fa-key c-wrapper__form__field__user"></span>
                <Input
                  className='c-wrapper__form__field__input'
                  type="text"
                  autoComplete="off"
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                />
              </div>
              <div className="c-wrapper__form__field">
                <span className="fa fa-eye c-wrapper__form__field__user"></span>
                <Input
                  className='c-wrapper__form__field__input'
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                />
              </div>
              <div className="c-wrapper__form__field">
                <span className="fa fa-eye c-wrapper__form__field__user"></span>
                <Input
                  className='c-wrapper__form__field__input'
                  type="password"
                  autoComplete="off"
                  name="cpassword"
                  id="cpwd"
                  placeholder="Confirm password"
                />
              </div>
              <Button className="btn c-wrapper__form__button" value='signup'></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;