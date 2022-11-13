import React from 'react';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import './style.scss';
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const intList = [
    { id: 1, name: 'Eat', status: 'new' },
    { id: 2, name: 'Sleep', status: 'completed' },
    { id: 3, name: 'Code', status: 'new' },
  ];
  const [list, setList] = useState(intList);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    // const clone = [...list];
    const clone = JSON.parse(JSON.stringify(list));
    clone[index] = { ...clone[index], status: clone[index].status === 'new' ? 'completed' : 'new' };
    setList(clone);
  };
  const handleFilter = (filter) => {
    setFilterStatus(filter);
  };

  const filterList = list.filter((item) => item.status === filterStatus || filterStatus === 'all');

  return (
    <div>
      <h3>What to do</h3>
      <TodoList todoList={filterList} onTodoClick={handleTodoClick}></TodoList>
      <button className="" onClick={() => handleFilter('all')}>
        Show all
      </button>
      <button className="" onClick={() => handleFilter('new')}>
        New
      </button>
      <button className="" onClick={() => handleFilter('completed')}>
        Completed
      </button>
    </div>
  );
}

export default TodoFeature;
