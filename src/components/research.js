import React from 'react';
import Publication from './publication';

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row" style={{margin: "50px"}}>
        <div className="row">
          <div className="col-sm-4">
            <h2>Research</h2>
            <div>
              <img src={process.env.PUBLIC_URL + "/assets/research.jpg"} style={{"width":"100%"}} alt="Research"/>
            </div>
            <br />
            <h5>Research Interests</h5>
            <ul className="list-group">
              <li className="list-group-item">Phishing attack detection</li>
              <li className="list-group-item">Data science and applications</li>
              <li className="list-group-item">Network and web application security</li>
              <li className="list-group-item">Computer Science pedagogy</li>
            </ul>
            <br />
            <h5><a href="https://scholar.google.com/citations?user=--sMoY0AAAAJ&amp;hl=en" target="_blank" rel="noreferrer">Google Scholar</a></h5>
            <h5><a href="https://www.researchgate.net/profile/Ram_Basnet2" target="_blank" rel="noreferrer">ResearchGate</a></h5>
            <h5><a href="http://conquer.cra.org/" target="_blank" rel="noreferrer">Ungergraduate CS Research</a></h5>
            <hr className="d-sm-none" />
          </div>
          <Publication />
        </div>
      </div>
    );
  }
}

export default Research;