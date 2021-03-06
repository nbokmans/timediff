import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment-duration-format';
import './App.css';

class App extends Component {
  state = {
    start: moment().format('DD.MM.YYYY H.mm'),
    end: moment().format('DD.MM.YYYY H.mm')
  }

  render() {
    const { start, end } = this.state;
    let diff = '   -';
    const startDate = moment(start, 'DD.MM.YYYY H.mm');
    const endDate = moment(end, 'DD.MM.YYYY H.mm');

    if (startDate.isValid() && endDate.isValid()) {
      diff = moment.duration(endDate.diff(startDate)).format('H[ hours and ]m[ minutes]', {
        trim: false
      });
    }

    return (
      <div style={{ float: 'left' }}>
        <div style={{ float: 'left' }}>
          Start
          <div style={{ clear: 'both' }}></div>
          <input
            value={start}
            onChange={(e) => this.setState({ start: e.target.value })} />
        </div>
        <div style={{ float: 'left' }}>
          End
          <div style={{ clear: 'both' }}></div>
          <input
            value={end}
            onChange={(e) => this.setState({ end: e.target.value })} />
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
