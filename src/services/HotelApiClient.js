const LATENCY = 200;

let stub = require('./hotelSearchData.json');

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
    return this.request(stub.HotelInfoList.HotelInfo);
  }

  static findHotelById(id) {
    let tmp = stub.HotelInfoList.HotelInfo.filter(elem => elem.HotelID === id);
    const hotel = tmp[0] || {};
    return this.request(hotel);
  }
}
