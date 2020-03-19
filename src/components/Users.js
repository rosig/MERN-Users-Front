import React, { useState } from "react";
import "./Users.css";
import axios from "axios";
import { Button } from "react-bootstrap";

const User = props => {
  const [userSelected, setUserSelected] = useState("");
  const [userDeleted, setUserDeleted] = useState("");

  async function deleteUser(id) {
    await axios
      .delete("http://localhost:8081/user/delete/" + id)
      .then(res => {
        console.log("Usuário deletado com sucesso!");
        setUserSelected("");
        setUserDeleted("");
        props.updateUsers();
      })
      .catch(err => {
        console.log("Delete User Error --> " + err);
      });
  }

  const users = props.users.map((user, index) => {
    if (index !== userSelected) {
      return (
        <div
          key={index}
          className="user-container"
          onClick={() => {
            setUserSelected(index);
            setUserDeleted("");
          }}
        >
          <div className="user-name user-item">
            <span>{user.name}</span>
          </div>
          <div className="user-email user-item">
            <span>{user.email}</span>
          </div>
          <div className="user-occupation user-item">
            <span>{user.occupation}</span>
          </div>
          <div className="user-created user-item">
            <span>{user.created}</span>
          </div>
        </div>
      );
    } else if (index !== userDeleted) {
      return (
        <div key={index} className="edit-delete-buttons">
          <Button variant="primary" onClick={() => setUserSelected("")}>
            Return
          </Button>
          <Button
            variant="warning"
            onClick={() => console.log("Incomplete ...")}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={() => setUserDeleted(index)}>
            Delete
          </Button>
        </div>
      );
    } else {
      return (
        <div key={index} className=" edit-delete-buttons">
          <h5> Delete user: {user.name} ?</h5>
          <Button variant="success" onClick={() => deleteUser(user._id)}>
            Yes
          </Button>
          <Button variant="danger" onClick={() => setUserDeleted("")}>
            No
          </Button>
        </div>
      );
    }
  });

  return <div>{users}</div>;
};

function Users(props) {
  return (
    <div className="list-users-container">
      <User users={props.users} updateUsers={props.updateUsers} />
    </div>
  );
}

export default Users;
