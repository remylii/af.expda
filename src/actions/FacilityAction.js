import { dispatch } from '../dispatcher';
import HotelApiClient from '../services/HotelApiClient';

export default class FacilityAction {
  static fetchHotels(conditions) {
    return HotelApiClient.fetchHotels(conditions).then(hotels => {
      dispatch({ type: 'hotels/fetch', hotels });
    });
  }

  static findHotelById(id) {
    return HotelApiClient.findHotelById(id).then(hotel => {
      dispatch({ type: 'hotel/choose', selectedId: id, hotel });
    });
  }

  static initLoad() {
    return dispatch({ type: 'hotel/init' });
  }
}
