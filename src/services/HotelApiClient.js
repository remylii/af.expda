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
}
