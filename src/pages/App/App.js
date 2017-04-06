import React from 'react';
import { Container } from 'flux/utils';

import FacilityAction from '../../actions/FacilityAction';
import facilityStore from '../../stores/facilityStore';


import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import FacilityList from '../../components/FacilityList/FacilityList';

class App extends React.Component {

  static getStores() {
    return [facilityStore]
  }

  static calculateState() {
    return facilityStore.getState();
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App# componentDidMount');
    FacilityAction.fetchHotels(this.state.condition);
  }

  render() {
    return (
      <div>
        <GlobalHeader />

        <main>
          <h2 className="App-PageTitle">App</h2>
          <FacilityList conditions={this.state.conditions} hotels={this.state.hotels} />
        </main>
      </div>
    );
  }
}

export default Container.create(App);
