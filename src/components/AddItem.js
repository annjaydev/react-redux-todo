import React, { useState } from 'react';
import './AddItem.css';
import { useDispatch } from 'react-redux';
import { fetchManyTasksAction } from '../store';
import axios from 'axios';

const baseURL = 'http://localhost:8000/';

export const AddItem = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post(`${baseURL}createTask`, { text, isCheck: false })
      .then(res => {
        dispatch(fetchManyTasksAction(res.data));
        setText('');
      });
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