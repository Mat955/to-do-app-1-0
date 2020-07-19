import React from 'react';

const Task = (props) => {

  const { text, date, id, active, important, finishDateTask } = props.task;

  const style = {
    color: 'red'
  }

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - to <span>{date}</span>
          <button onClick={() => props.change(id)}>It's done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {

    const finish = new Date(finishDateTask).toDateString();
    return (
      <p>
        <strong>{text}</strong><em> (to do - {date}) </em><br />
        -confirmation of execution <span> {finish} </span>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    );
  }
}

export default Task;