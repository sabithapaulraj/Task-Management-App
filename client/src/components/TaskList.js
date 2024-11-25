import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <Container className="mt-4">
      <h3>Task List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task._id}>
              <td>{index + 1}</td>
              <td>{task.taskName}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onDelete(task._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TaskList;
