import React from "react";
import "./AddUser.css";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      occupation: "",
      buttonDisabled: false
    };
  }

  resetState() {
    this.setState({
      name: "",
      email: "",
      occupation: "",
      buttonDisabled: false
    });
  }

  async handleClickAddButton() {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.occupation !== ""
    ) {
      this.setState({
        buttonDisabled: true
      });

      const data = {
        name: this.state.name,
        email: this.state.email,
        occupation: this.state.occupation
      };

      this.resetState();

      await axios
        .post("http://localhost:8081/user/add", data)
        .then(() => {
          this.props.changeShowAddForm();
          this.props.updateUsers();
        })
        .catch(err => {
          console.log("Add User Error ---> " + err);
        });
    }
  }

  render() {
    return (
      <div
        className={
          this.props.showAddForm
            ? "add-user-container"
            : "form-off add-user-container"
        }
      >
        <div className="form-new-user">
          <h3> New user </h3>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
                onChange={e => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                required
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Occupation"
                required
                onChange={e => this.setState({ occupation: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="info"
              disabled={this.state.buttonDisabled}
              onClick={() => this.handleClickAddButton()}
            >
              Adicionar
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddUser;
