import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment-duration-format';
import './App.css';

class App extends Component {
  state = {
    start: moment(),
    end: moment()
  }

  render() {
    const { start, end } = this.state;
    const diff = moment.duration(end.diff(start)).format('H[ hours and ]m[ minutes]', {
      trim: false
    });

    return (
      <div style={{ float: 'left' }}>
        <div style={{ float: 'left' }}>
          Start
          <Datetime
            open={false}
            value={start}
            onChange={(newValue) => this.setState({ start: newValue })} />
        </div>
        <div style={{ float: 'left' }}>
          End
          <Datetime
            open={false}
            value={end}
            onChange={(newValue) => this.setState({ end: newValue })} />
        </div>
        <div style={{ float: 'left' }}>
          Time difference: <br />
          {diff}
        </div>
      </div >
    );
  }
}

export default App;
