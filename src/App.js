import React, { useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { AddItem } from './components/AddItem';
import { Item } from './components/Item';

import { useDispatch, useSelector } from 'react-redux';
import { fetchManyTasksAction } from './store';

const baseURL = 'http://localhost:8000/';

export const App = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    axios.get(`${baseURL}allTasks`)
    .then(res => dispatch(fetchManyTasksAction(res.data)));
  }, []);

  return (
    <>
      <Header title='Todo-List App' />
      <AddItem />
      {
        tasks.map((task) => {
          const props = {
            key: task.id,
            id: task.id,
            text: task.text,
            isCheck: task.isCheck
          }

          return <Item {...props} />;
        })
      }
    </>
  );
}

