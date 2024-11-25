import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EditTask = ({ task, onUpdate }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (task) {
      setTaskName(task.taskName);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task._id, { taskName, priority, status });
  };

  return (
    <Container className="mt-4">
      <h3>Edit Task</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
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
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Update Task
        </Button>
      </Form>
    </Container>
  );
};

export default EditTask;
