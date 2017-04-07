import React from 'react';
import { Container } from 'flux/utils';

import planStore from '../../stores/planstore';
import FacilityAction from '../../actions/FacilityAction';

import FacilityDetail from '../../components/FacilityDetail/FacilityDetail';

class Facility extends React.Component {

  static getStores() {
    return [planStore];
  }

  static calculateState() {
    return planStore.getState();
  }

  constructor(props) {
    super(props);
    console.log('Facility# construcotr');
  }

  componentDidMount() {
    console.log('Facility# componentDidMount');
    const id = this.props.match.params.id || '';
    if (id) {
      FacilityAction.findHotelById(id);
    }
  }

  render() {
    console.log('Facility# render');
    if (!this.state.loaded) {
      return null;
    }

    return (
      <div>
        <h3>Facility Container</h3>
        <FacilityDetail hotel={this.state.hotel} />
      </div>
    );
  }
}

export default Container.create(Facility);
