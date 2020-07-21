import React from 'react';
import './Task.css'

const Task = (props) => {

  const { text, date, id, active, important, finishDateTask } = props.task;

  const style = {
    color: 'red'
  }

  if (active) {
    return (
      <div className="list-item">
        <span>{date}</span><strong style={important ? style : null}>{text}</strong>
        <div className="buttons-list">
          <button className='btn-delete task-btn' onClick={() => props.delete(id)}><i className="fa fa-trash"></i></button>
          <button className='btn-done task-btn' onClick={() => props.change(id)}><i className="fa fa-check-circle"></i></button>
        </div>
      </div >
    );
  } else {

    const finish = new Date(finishDateTask).toDateString();
    return (
      <div className="list-item-done">
        <p>Task finished:</p>
        <span>{finish}</span><strong>{text}</strong>
        <div><p> (to do - {date}) </p></div>
        <button className='btn-delete task-btn' onClick={() => props.delete(id)}><i className="fa fa-trash"></i></button>
      </div >
    );
  }
}

export default Task;