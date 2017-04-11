import React from 'react';
import { Container } from 'flux/utils';

import planStore from '../../stores/planstore';
import FacilityAction from '../../actions/FacilityAction';

import FacilityDetail from '../../components/FacilityDetail/FacilityDetail';
import RoomTypeList from '../../components/RoomTypeList/RoomTypeList';

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

  componentWillUnmount() {
    FacilityAction.initLoad();
  }

  render() {
    console.log('Facility# render');
    if (!this.state.loaded) {
      return null;
    }

    return (
      <div className="Facility">
        <h3 className="title">Facility Container</h3>
        <FacilityDetail hotel={this.state.hotel} />
        <RoomTypeList roomTypeList={this.state.hotel.RoomTypeList} />
      </div>
    );
  }
}

export default Container.create(Facility);
