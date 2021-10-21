import { fetchManyTasksAction } from '../reducers/taskReducer';
import axios from 'axios';

const baseURL = 'http://localhost:8000/';

export const getAllTasks = () => {
  return dispatch => {
    axios.get(`${baseURL}allTasks`)
    .then(res => dispatch(fetchManyTasksAction(res.data)));
  }
}

export const addTask = (text, done) => {
  return dispatch => {
    axios.post(`${baseURL}createTask`, { text, isCheck: done })
    .then(res => dispatch(fetchManyTasksAction(res.data)));
  }
}

export const editTask = (id, text, done) => {
  return dispatch => {
    axios.patch(`${baseURL}updateTask`, {id, text, isCheck: done})
      .then(res => dispatch(fetchManyTasksAction(res.data)));
  }
}

export const deleteTask = (id) => {
  return dispatch => {
    axios.delete(`${baseURL}deleteTask?id=${id}`)
      .then(res => dispatch(fetchManyTasksAction(res.data)));
  }
}
