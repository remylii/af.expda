import React from 'react';
import { Route } from 'react-router-dom';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import FacilityDetail from '../../components/FacilityDetail/FacilityDetail';

export default class Facility extends React.Component {
  constructor(props) {
    super(props);
  }

  presets() {
    return (
      <div>
        <h2>Facility prests</h2>
        <p>hasn't id</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <GlobalHeader />

        <h2>Facility Container</h2>
        <Route path="/facility/:id" component={FacilityDetail} />
        <Route exact path={this.props.match.url} render={this.presets} />
      </div>
    );
  }
}
