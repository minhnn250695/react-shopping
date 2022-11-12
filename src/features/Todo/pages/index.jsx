import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const list = [
    { id: 1, name: 'Eat' },
    { id: 2, name: 'Sleep' },
    { id: 3, name: 'Code' },
  ];

  const onSubmitTodoForm = (value) => {
    console.log('form', value);
  };

  return (
    <div>
      <h3>What to do</h3>
      {/* <form>
        <TodoForm onsubmit={onSubmitTodoForm}></TodoForm>
      </form> */}
      <TodoList todoList={list}></TodoList>
    </div>
  );
}

export default TodoFeature;
