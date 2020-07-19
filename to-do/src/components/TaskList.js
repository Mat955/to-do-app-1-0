import React from 'react';
import Task from './Task';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />);

  const doneTasks = done.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />);

  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Zero tasks, you have free time!</p>}
      </div>

      <hr />

      <div className="done">
        <h3>Tasks done (<em>{done.length}</em>)</h3>
        {doneTasks}
      </div>
    </>
  );
}

export default TaskList;