import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends React.Component {

  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: 'play a game',
        date: '2020-11-07',
        important: false,
        active: true,
        finishDateTask: null
      },
      {
        id: 1,
        text: 'drive to carwash',
        date: '2020-10-25',
        important: false,
        active: true,
        finishDateTask: null
      },
      {
        id: 2,
        text: 'buy flowers for mom day',
        date: '2020-09-07',
        important: true,
        active: true,
        finishDateTask: null
      },
      {
        id: 3,
        text: 'gain 5kg of muscle',
        date: '2020-10-10',
        important: true,
        active: true,
        finishDateTask: null
      },
    ]
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
      <div className="App">
        <h1>TO_DO_APP_1.0</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
