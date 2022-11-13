import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            onClick={() => handleTodoClick(todo, index)}
            className={classnames({ 'todo-item': true, completed: todo.status === 'completed' })}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
