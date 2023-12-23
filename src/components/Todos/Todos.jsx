//functional component
// import React from "react";
// import TodoItem from "../TodoItem/TodoItem";

// const Todos = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <TodoItem title="Learn react" />
//       <TodoItem title="practice react" />
//     </div>
//   );
// };

// export default Todos;

//class component
import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

class Todos extends Component {
  //     ES6
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       todos: [
  //         {
  //           id: 1,
  //           title: "Learn react",
  //         },
  //         {
  //           id: 2,
  //           title: "Practice react",
  //         },
  //       ],

  //       todoTitle: "",
  //     };
  //   }

  //ES7 mhr constructor ma lo tok boo
  state = {
    // todos: [
    //   {
    //     id: 1,
    //     title: "Learn react",
    //   },
    //   {
    //     id: 2,
    //     title: "Practice react",
    //   },
    // ],

    todos: [],

    todoTitle: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewTodo = (e) => {
    const todos = [...this.state.todos];
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    todos.push({ id, title: this.state.todoTitle });

    this.setState({ todos });
  };

  deleteTodo = (id) => {
    // console.log(id);
    const todos = [...this.state.todos];
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
  };

  updateTodo = (data) => {
    // console.log(data);
    const todos = [...this.state.todos];
    const index = todos.findIndex((todo) => todo.id === data.id);

    todos[index].title = data.title;
    this.setState({ todos });
  };

  render = () => {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          style={{ marginLeft: "4rem" }}
          type="text"
          name="todoTitle"
          value={this.state.todoTitle}
          onChange={this.handleChange}
        />
        <button onClick={this.createNewTodo}>Save</button>
        {/* <TodoItem title={this.state.todos[0].title} /> */}
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              title={todo.title}
              key={todo.id} //unique fik tae kg ko key pyy ya tr fik dL id ka unique fik loh
              id={todo.id}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  };
}

export default Todos;
