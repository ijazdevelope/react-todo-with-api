import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/todo/todo.css';
import TodoImg from '../../static/images/to-do-list.png';
import Button from '../Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { TodoSchema } from '../../pages/auth/schema-validation/SchemaValidation';
import { Axios } from '../../config/Interceptor';
import { useDispatch, useSelector } from 'react-redux'
import { Action, addTodo } from '../../redux/actions/Actions';
import { actionTypes } from '../../redux/constants/Constants';
import TodoNotFoundImg from '../../assets/images/error-404-not-found.png';



const Todo = () => {

  const state = useSelector(state => state?.reducer?.list);
  const dispatch = useDispatch();

  console.log(state, 'redux state onload');

  // const fetchData = () => {
  //   const response = Axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => console.log('response', response.data))
  //     .catch(err => console.log(err));
  //   dispatch(Action(response?.data));
  //   console.log('response in Todo Comp', response);
  // }

  const { list } = useSelector(state => state?.reducer);

  console.log(list, 'redux state');

  const fetchData = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => dispatch(Action(response?.data)))
      .catch(err => console.log(err));
    // dispatch(Action(response?.data));
    // console.log('response in Todo Comp', response.data);
  }

  useEffect(() => {
    // fetchData();
  }, []);

  const { handleSubmit, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(TodoSchema),
  });

  const onSubmit = (data) => {
    dispatch(addTodo({ todo_name: data?.todo_name }));
  };

  return (
    <div className="c-todo">
      <div className='container'>
        <div className="row">
          <div className='c-todo__header'>
            <p className='c-todo__icon'>
              <picture>
                <img className='img-fluid c-todo__img' src={TodoImg} alt="todo-icon" />
              </picture>
            </p>
            <Link className='c-todo__logout' to='/'>logout</Link>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 m-auto c-todo__add">
              <h2 className='c-todo__title'>todo title </h2>
              <form className='c-todo__form' onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3 c-todo__input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <img className='c-todo__todo-img' src={TodoImg} alt='todo-img' />
                  </span>
                  <Input
                    type="text"
                    name='todo_name'
                    className={`form-control c-todo__input ${errors.todo_name && 'border-danger border c-todo__input--error-border'} `}
                    placeholder="Enter Todo...." aria-label="Username"
                    aria-describedby="basic-addon1"
                    register={register}
                    errorMsg={errors?.todo_name?.message}
                    setValue={setValue}
                  />
                </div>
                <p className='c-wrapper__form__error'>{errors.todo_name?.message}</p>
                <Button className='btn col-12' value='add todo' type='submit'></Button>
              </form>
              <div className='row my-3 justify-content-center'>
                <Button className='btn col-3 btn--success' value='all' type='button'></Button>
                <Button className='btn col-3 mx-3 my-3 my-md-0 btn--primary' value='done' type='button'></Button>
                <Button className='btn col-3 btn--secondary' value='todo' type='button'></Button>
              </div>
              <form className='c-todo__form'>
                <div className="input-group mb-3 c-todo__input-group">
                  <span className="fa fa-search input-group-text c-todo__search" id="basic-addon1">
                  </span>
                  <Input
                    name="todo_name"
                    type="text"
                    className="form-control c-todo__input"
                    placeholder="Search For Todos...."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>

              {list?.length > 0 ? (
                list?.map(data => (
                  <div className="col-12 d-flex justify-content-between my-3 c-todo__form">
                    <span className='c-todo__name'> {data?.name} </span>
                    <div className='d-flex align-items-center'>
                      <input type='checkbox' />
                      <span className='fa fa-pencil mx-3 text-success'></span>
                      <span className='fa fa-trash-o text-danger'></span>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h3 className='c-todo__not-found'>todo not found</h3>
                  <img src={TodoNotFoundImg} className='w-100' alt='todo-not-found' />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;