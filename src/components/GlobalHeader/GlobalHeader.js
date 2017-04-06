import React from 'react';
import { Link } from 'react-router-dom';

export default class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="GlobalHeader-header">
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/note">Note</Link></li>
          <li><Link to="/note/123">Note Detail</Link></li>
          <li><Link to="/error/not-found">404</Link></li>
        </ul>

        <hr/>
      </header>
    );
  }
}
