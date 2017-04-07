const LATENCY = 200;

let hotels = require('./data');

export default class HotelApiClient {
  static request(response) {
    return new Promise(resolve => {
      setTimeout(() => resolve(response), LATENCY);
    });
  }

  static wait() {
    return new Promise(resolve => setTimeout(resolve, LATENCY));
  }

  static fetchHotels(conditions) {
    return this.request(hotels);
  }

  static findHotelById(id) {
    let tmp = hotels.filter(elem => elem.id === id);
    const hotel = tmp[0] || { id: id, Name: 'ほげほげ', Description: 'ほげほげほげー' };
    return this.request(hotel);
  }
}
