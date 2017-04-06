import React from 'react';
import { Link } from 'react-router-dom';

export default class FacilityList extends React.Component {

  hotelItem(hotel) {
    return (
      <div key={hotel.id}>
        <h4>{hotel.Name}</h4>
        <p>{hotel.Description}</p>
      </div>
    );
  }

  render() {
    const { conditions, hotels } = this.props;

    let items = [];
    hotels.forEach(hotel => {
      items.push(this.hotelItem(hotel));
    });

    return (
      <div>
        <h3>Facility List Components</h3>
        { items }
      </div>
    );
  }
}