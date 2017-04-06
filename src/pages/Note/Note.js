import React from 'react';
import { Route } from 'react-router-dom';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import NoteDetail from './NoteDetail';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    console.log('#Note');
    console.dir(props);
  }

  presets() {
    return (
      <div>
        <h2>Note</h2>
        <h3>Please select a note.</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <GlobalHeader />

        <Route path="/note/:id" component={NoteDetail} />
        <Route exact path={this.props.match.url} render={this.presets} />
      </div>
    );
  }
}
