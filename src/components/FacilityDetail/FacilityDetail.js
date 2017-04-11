import React from 'react';

export default class FacilityDetail extends React.Component {

  emptyDetail () {
    return (
      <div>
        <h2>No Facility</h2>
      </div>
    );
  }

  render() {
    console.dir(this.props.hotel);
    const hotel = this.props.hotel;
    const amenities = [];

    if (!hotel.HotelID) {
      return this.emptyDetail();
    }

    if (typeof hotel.AmenityList.Amenity === 'string') {
      amenities.push(<li key='hotel-amenitylist-amenity-0'>{ hotel.AmenityList.Amenity }</li>);
    } else {
      for (let v in hotel.AmenityList.Amenity) {
        amenities.push(<li key={`hotel-amenitylist-amenity-${v}`}>{ hotel.AmenityList.Amenity[v] }</li>);
      }
    }

    return (
      <div>
        <h2>{ hotel.Name }</h2>
        <table>
          <tbody>
            <tr>
              <th>HotelID</th>
              <td>{ hotel.HotelID }</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{ hotel.Name }</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{ hotel.Description }</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>
                <p>{ hotel.Location.StreetAddress }{ hotel.Location.City }{ hotel.Location.province }</p>
                <p>{ hotel.Location.GeoLocation.Latitude }, { hotel.Location.GeoLocation.Longitude }</p>
              </td>
            </tr>
            <tr>
              <th>CheckInStartTime / CheckInEndTime / CheckOutTime</th>
              <td>{ hotel.CheckInStartTime } / { hotel.CheckInEndTime } / { hotel.CheckOutTime }</td>
            </tr>
            <tr>
              <th>DetailsUrl</th>
              <td>
                <a href={ hotel.DetailsUrl } target="_blank">{ hotel.DetailsUrl }</a>
              </td>
            </tr>
            <tr>
              <th>StarRating / GuestRating ( GuestReviewCount )</th>
              <td>{ hotel.StarRating } / { hotel.GuestRating } ({ hotel.GuestReviewCount })</td>
            </tr>
            <tr>
              <th>ThumbnailUrl</th>
              <td>
                <img src={ hotel.ThumbnailUrl } alt="ThumbnailUrl" />
              </td>
            </tr>
            <tr>
              <th>AmenityList</th>
              <td>
                <ul>
                  { amenities }
                </ul>
              </td>
            </tr>
            <tr>
              <th>Promotion</th>
              <td>
                <p>Amount: { (!hotel.Promotion) ? '' : hotel.Promotion.Amount.Value }</p>
                <p>{ (!hotel.Promotion) ? '割引情報なし' : hotel.Promotion.Description }</p>
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <dl>
                  <dt>BaseRate</dt>
                  <dd>{ hotel.Price.BaseRate.Value }</dd>
                  <dt>TaxRcAndFees</dt>
                  <dd>{ hotel.Price.TaxRcAndFees.Value }</dd>
                  <dt>TotalRate</dt>
                  <dd>{ hotel.Price.TotalRate.Value }</dd>
                </dl>
              </td>
            </tr>
            <tr>
              <th>HotelMandatoryTaxesAndFees</th>
              <td>
                { (!hotel.HotelMandatoryTaxesAndFees) ? '' : hotel.HotelMandatoryTaxesAndFees.Value }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
