import React from "react";
import "./Navbar.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function Navb(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mr-auto nav-title"> USERS </Navbar.Brand>
      <Button
        variant="info"
        className="mr-auto button-add"
        onClick={() => props.changeShowAddForm()}
      >
        Add
      </Button>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navb;
