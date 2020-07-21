import React from 'react';
import Task from './Task';
import './TaskList.css'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDateTask - a.finishDateTask);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
  }

  // done.sort((a, b) => {
  //   if (a.finishDateTask < b.finishDateTask) {
  //     return 1;
  //   }
  //   if (a.finishDateTask > b.finishDateTask) {
  //     return -1;
  //   }
  //   return 0;
  // })

  const activeTasks = active.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />);

  const doneTasks = done.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />);

  return (
    <div className="list">
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks.length > 0 ? activeTasks : <p>No tasks!</p>}
      </div>
      <div className="done">
        <h3>Tasks done ( <em>{done.length}</em> )</h3>
        {doneTasks}
      </div>
    </div>
  );
}

export default TaskList;