import React from 'react';
import { Link } from 'react-router-dom';

export default class FacilityList extends React.Component {

  hotelItem(hotel) {
    return (
      <Link key={hotel.HotelID} to={`/facility/${hotel.HotelID}`}>
        <div className="FacilityList-item">
          <div className="image">
            <img src={hotel.ThumbnailUrl} alt={hotel.Name} />
          </div>
          <div className="presentation">
            <h4 className="title">{hotel.Name}</h4>
            <div className="province">{hotel.Location.Province}</div>
            <p className="description">{hotel.Description}</p>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    const { hotels } = this.props;

    let items = [];
    hotels.forEach(hotel => {
      items.push(this.hotelItem(hotel));
    });

    return (
      <div className="FacilityList">
        <h3 className="title">Facility List Components</h3>
        { items }
      </div>
    );
  }
}
