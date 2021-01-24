import React from 'react';
import Schedule from './schedule';
import Courses from './courses';

class Teaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div classNameName="row" style={{ margin: "50px" }}>
        <div className="row">
            <Courses />
            <Schedule />
            <hr class="d-sm-none" />
          </div>
        </div>
    );
  }
}

export default Teaching;