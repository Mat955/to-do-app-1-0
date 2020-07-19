import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {

  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: '',
    checked: false,
    date: this.minDate
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    });
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    });
  }

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);

      if (add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert('need more words...');
    }
  }

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + '-12-31';

    return (
      <div className="form">
        <input type="text" placeholder="add task" value={this.state.text} id="important" onChange={this.handleText} />
        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />
        <label htmlFor="important">Priority</label><br />
        <label htmlFor="date">Date to do: </label>
        <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} /><br />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;