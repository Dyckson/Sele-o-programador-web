import React, { Component } from "react";
import api from "../api/api";

class AppUsuarios extends Component {
  state = {
    users: [],
    posts: [],
    userId: "", 
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await api.get("/users");
    this.setState({ users: response.data });
  }

  handleChange() {
    this.setState({userId: this.target.value});
  }

  async getPosts() {
    let id = document.getElementById('usuarios').value;
    const response =  await api.get(`/posts?userId=${id}`);
    this.setState({posts: response.data});
  }

  render() {
    const { users } = this.state;
    const {posts} = this.state;

    return (
      <div>
          <label htmlFor="usuarios">
            <h1>Usuários</h1>
          </label>

          <select onChange = {() => this.handleChange} value={this.state.value} id="usuarios">
            <option defaultValue>Selecione um usuário</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick = {() => this.getPosts()}>Ver Posts</button>
          {posts.map((post) => (
              <p key={post.id}>
                {post.title}
                {post.body}
              </p>
            ))}
      </div>
    );
  }
}

export default AppUsuarios;
