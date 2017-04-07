import React from 'react';
import { Container } from 'flux/utils';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FacilityAction from '../../actions/FacilityAction';
import facilityStore from '../../stores/facilityStore';

import Facility from '../Facility/Facility';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import FacilityList from '../../components/FacilityList/FacilityList';
import NotFound from '../../components/Error/NotFound';

class App extends React.Component {

  static getStores() {
    return [facilityStore];
  }

  static calculateState() {
    return facilityStore.getState();
  }

  constructor(props) {
    super(props);
    console.log('App# constructor');
  }

  componentDidMount() {
    console.log('App# componentDidMount');
    FacilityAction.fetchHotels(this.state.condition);
  }

  render() {
    console.log('app# render');
    console.dir(this.props);

    const facilityListComponent = () => {
      return <FacilityList hotels={this.state.hotels} />;
    };

    const facilityComponent = ({ match }) => {
      return <Facility conditions={this.state.conditions} match={match} />;
    };

    return (
      <BrowserRouter>
        <div id="App-Wrapper">
          <GlobalHeader />

          <div>
            <h2 className="App-PageTitle">App</h2>
            <hr />
            <Switch>
              <Route path="/facility/:id" render={facilityComponent} />
              <Route exact path="/" render={facilityListComponent} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Container.create(App);
