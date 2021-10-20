import React, { useState } from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import DoneIcon from '@material-ui/icons/DoneOutline';
import './Item.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchManyTasksAction, editIdAction } from '../store';

const baseURL = 'http://localhost:8000/';

export const Item = (props) => {
  const {id, text, isCheck} = props;
  
  const dispatch = useDispatch();
  const editId = useSelector(state => state.editId);
  const [inputText, setInputText] = useState(text);

  const deleteTask = (id) => {
    axios.delete(`${baseURL}deleteTask?id=${id}`)
      .then(res => dispatch(fetchManyTasksAction(res.data)));
  }

  const updateTask = (id, text, isCheck) => {
    axios.patch(`${baseURL}updateTask`, {id, text, isCheck})
      .then(res => {
        dispatch(fetchManyTasksAction(res.data));

        if (editId) dispatch(editIdAction(null));
      });
  }

  return (
    <div className='task-box'>
      <div className='task-content'>

        {
          id === editId
            ? <input
              className='task-edit-input'
              type='text'
              value={inputText}
              onChange={
                (e) => setInputText(e.target.value)
              }
            />
            : <>
              <input
                className='task-checkbox'
                type='checkbox'
                checked={isCheck}
                value={isCheck}
                onChange={() => updateTask(id, text, !isCheck)}
              />
              <span
                className={isCheck ? 'task-box-text task-box-text--done' : 'task-box-text'}
              >
                {text}
              </span>
            </>
        }
      </div>

      <div className='task-control'>
        {
          id === editId
            ? <DoneIcon
              className='task-done-icon'
              onClick={() => {
                if (inputText) {
                  updateTask(id, inputText, isCheck)
                }
              }} />
            : <EditIcon className='task-edit-icon' onClick={() => dispatch(editIdAction(id))} />
        }

        <DeleteIcon className='task-delete' onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
}
