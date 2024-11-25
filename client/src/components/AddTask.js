import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskName, priority, status });
    setTaskName('');
    setPriority('');
    setStatus('');
  };

  return (
    <Container className="mt-4">
      <h3>Add New Task</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default AddTask;
