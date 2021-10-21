import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/asyncActions/tasks';
import './AddItem.css';

export const AddItem = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text, false));
    setText('');
  }

  return (
    <form
      className='todo-form'
      onSubmit={(e) => onFormSubmit(e)}
    >
      <input
        className='todo-input'
        type="text"
        value={text}
        onChange={(e) => setText((text) => text = e.target.value)}
      />
      <button className='todo-add-btn'>Add Task</button>
    </form>
  );
}