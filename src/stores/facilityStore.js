import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class FacilityStore extends ReduceStore {
  getInitialState() {
    return {
      conditions: {
        dates: ''
      },
      hotels: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'hotels/fetch':
        return Object.assign({}, state, {
          hotels: action.hotels
        });

      default:
        return state;
    }
  }
}

export default new FacilityStore(dispatcher);
