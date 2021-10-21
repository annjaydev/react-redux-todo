import React, { useEffect } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { AddItem } from './components/AddItem';
import { Item } from './components/Item';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from './store/asyncActions/tasks';

const baseURL = 'http://localhost:8000/';

export const App = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
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

