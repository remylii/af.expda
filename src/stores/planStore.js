import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class PlanStore extends ReduceStore {
  getInitialState() {
    return {
      loaded: false,
      selectedId: 0,
      hotel: {},
      plans: []
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'hotel/choose':
        return Object.assign({}, state, {
          loaded: true,
          selectedId: action.selectedId,
          hotel: action.hotel
        });

      case 'hotel/init':
        return Object.assign({}, state, { loaded: false });
      default:
        return state;
    }
  }
}

export default new PlanStore(dispatcher);
