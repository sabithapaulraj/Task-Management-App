import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ title: searchTerm, status });
  };

  return (
    <Container className="mt-4">
      <h3>Search Tasks</h3>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default SearchTask;
