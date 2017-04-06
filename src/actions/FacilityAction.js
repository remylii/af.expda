import { dispatch } from '../dispatcher';
import HotelApiClient from '../services/HotelApiClient';

export default class FacilityAction {
  static fetchHotels(conditions) {
    return HotelApiClient.fetchHotels(conditions).then(hotels => {
      dispatch({ type: 'hotels/fetch', hotels });
    });
  }
}
