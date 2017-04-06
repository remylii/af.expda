import React from 'react';
import { Link } from 'react-router-dom';

export default class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="GlobalHeader-header">
        <ul className="GlobalHeader-nav">
          <li><Link to="/">Top</Link></li>
          <li><Link to="/facility">Facility</Link></li>
          <li><Link to="/facility/123">Facility/detail</Link></li>
          <li><Link to="/error/not-found">404</Link></li>
        </ul>

        <hr/>
      </header>
    );
  }
}
