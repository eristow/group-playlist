import React from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header mb-5">
        <h1>Group Playlist</h1>
      </div>
      <div className="App-body">
        <Col md={5}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type song name or paste link"
              aria-label="Type song name or paste link"
              aria-describedby="song-input-box"
              />
            <InputGroup.Append>
              <Button variant="outline-dark" type="submit">Add</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col md={8}>
          <Table striped bordered hover className="text-left">
            <thead>
              <tr>
                <th>#</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Oberhofer</td>
                <td>Ballroom Floor</td>
                <td>4:18</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Two Door Cinema Club</td>
                <td>What You Know</td>
                <td>3:12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Everything Everything</td>
                <td>Distant Past</td>
                <td>3:41</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </div>
    </div>
  );
}

export default App;
