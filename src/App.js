import React from "react";
import "./App.css";
import axios from "axios";

//Components
import Navb from "./components/Navbar";
import ListTitles from "./components/ListTitles";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAddForm: false
    };
    this.changeShowAddForm = this.changeShowAddForm.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }

  changeShowAddForm() {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  }

  async updateUsers() {
    await axios
      .get("http://localhost:8081/user/")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log("Update Users Error --> " + err);
      });
  }

  async componentDidMount() {
    await axios
      .get("http://localhost:8081/user/")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log("Get Users Error --> " + err);
      });
  }

  render() {
    return (
      <div className="App">
        <Navb changeShowAddForm={this.changeShowAddForm} />
        <AddUser
          showAddForm={this.state.showAddForm}
          changeShowAddForm={this.changeShowAddForm}
          updateUsers={this.updateUsers}
        />
        <ListTitles />
        <Users users={this.state.users} updateUsers={this.updateUsers} />
      </div>
    );
  }
}

export default App;
