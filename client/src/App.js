import React, { useState, useEffect } from 'react';
import { getTasks, addTask, editTask, deleteTask } from './api';
import './styles.css';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import TaskList from './components/TaskList';
import SearchTask from './components/SearchTask';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async (query = {}) => {
    const { data } = await getTasks(query);
    setTasks(data);
  };

  const handleAddTask = async (task) => {
    await addTask(task);
    loadTasks();
  };

  const handleEditTask = async (id, updatedTask) => {
    await editTask(id, updatedTask);
    setEditTaskData(null);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleSearch = (query) => {
    loadTasks(query);
  };

  return (
    <div>
      <header className="app-header">
        <h1>TASK MANAGER APP</h1>
      </header>
      <SearchTask onSearch={handleSearch} />
      {editTaskData ? (
        <EditTask task={editTaskData} onUpdate={handleEditTask} />
      ) : (
        <AddTask onAdd={handleAddTask} />
      )}
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={(task) => setEditTaskData(task)}
      />
    </div>
  );
};

export default App;
