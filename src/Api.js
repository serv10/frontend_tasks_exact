import axios from 'axios';

const API = 'http://192.168.18.10:3001/api/task/tasks';

export const getTasks = async () => {
   const res = await axios(API);
   return await res.data;
};

export const saveTask = async (titleTask) => {
   await axios.post(API, {
      title: titleTask,
   });
};

export const deleteTask = async (id) => {
   await axios.delete(`${API}/${id}`);
};

export const toggleCompleteTask = async (id) => {
   await axios.put(`${API}/${id}`);
};
