import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/todo/todo.css';
import TodoImg from '../../static/images/to-do-list.png';
import Button from '../Button';

const Todo = () => {
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
              <h2 className='c-todo__title'>todo title</h2>
              <form className='c-todo__form'>
                <div className="input-group mb-3 c-todo__input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <img className='c-todo__todo-img' src={TodoImg} alt='todo-img' />
                  </span>
                  <input type="text" className="form-control c-todo__input" placeholder="Enter Todo...." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <Button className='btn col-12' value='add todo' type='submit'></Button>
              </form>
              <div className='row my-3 justify-content-center'>
                <Button className='btn col-3 btn--success' value='all' type='button'></Button>
                <Button className='btn col-3 mx-3 my-3 my-md-0' value='done' type='button'></Button>
                <Button className='btn col-3 btn--secondary' value='todo' type='button'></Button>
              </div>
              <form className='c-todo__form'>
                <div className="input-group mb-3 c-todo__input-group">
                  <span className="fa fa-search input-group-text" id="basic-addon1">
                  </span>
                  <input type="text" className="form-control c-todo__input" placeholder="Search For Todos...." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </form>

              <div className="col-12 d-flex justify-content-between my-3 c-todo__form">
                <span className='c-todo__name'>todo name</span>
                <div className='d-flex align-items-center'>
                  <input type='checkbox' />
                  <span className='fa fa-pencil mx-3 text-success'></span>
                  <span className='fa fa-trash-o text-danger'></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;