import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {

  state = {
    text: '',
    checked: false,
    date: '2020-07-19'
  }

  render() {
    return (
      <div className="form">
        <input type="text" placeholder="add task" value={this.state.text} id="important" />
        <input type="checkbox" checked={this.state.checked} />
        <label htmlFor="important">Priority</label><br />
        <label htmlFor="date">Date to do: </label>
        <input type="date" value={this.state.date} min="2020-01-01" max="2020-12-31" /><br />
        <button>Add</button>
      </div>
    );
  }
}

export default AddTask;