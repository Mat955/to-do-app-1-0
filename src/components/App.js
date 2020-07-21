import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends React.Component {

  counter = 0;
  state = {
    tasks: []
  }

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  }

  changeTaskStatus = (id) => {
    // let tasks = [...this.state.tasks];
    const tasks = Array.from(this.state.tasks);

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDateTask = new Date().getTime();
      }
    });

    this.setState({
      tasks
    });
  }

  addTask = (text, date, important) => {

    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDateTask: null
    }
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  }

  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <h1>Task App 1.0</h1>
          <div className="main">
            <AddTask add={this.addTask} />
            <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
          </div>
          <footer>Copyright @2020 | Mateusz Lewartowski</footer>
        </div>
      </div>
    )
  }
}

export default App;
