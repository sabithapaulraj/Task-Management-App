import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/tasks' });

export const getTasks = (query) => API.get('/', { params: query });
export const addTask = (task) => API.post('/', task);
export const editTask = (id, task) => API.put(`${id}`, task);
export const deleteTask = (id) => API.delete(`${id}`);
