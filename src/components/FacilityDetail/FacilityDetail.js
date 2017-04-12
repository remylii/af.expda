import React from 'react';

export default class FacilityDetail extends React.Component {

  emptyDetail () {
    return (
      <div className="FacilityDetail">
        <h2 className="FacilityDetail-title">No Facility</h2>
      </div>
    );
  }

  largeImage(img_path) {
    const large_img_path = img_path.replace(/t\.jpg$/g, "l.jpg");
    return <img src={ large_img_path } />;
  }

  iconStar(rating) {
    const rate = parseInt(rating, 10);
    const name = 'icon icon-star-' + rate;
    return <span className={ name }></span>;
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

    const FacilityImage = this.largeImage(hotel.ThumbnailUrl);

    return (
      <div className="FacilityDetail">
        <h2 className="FacilityDetail-title">{ hotel.Name }</h2>
        <div className="FacilityDetail-item">
          <div className="image">
            { FacilityImage }
          </div>
          <div className="presentation">
            <div className="description">
              <p className="linear">{ hotel.Location.Province } { hotel.Location.City } { hotel.Location.StreetAddress } [{ hotel.Location.Country }]</p>
              <p>{ hotel.Location.GeoLocation.Latitude }, { hotel.Location.GeoLocation.Longitude }</p>
              <p className="linear">{ hotel.Description }</p>
              <p>{ this.iconStar(hotel.StarRating) } { hotel.GuestRating } / ReviewCount: ({ hotel.GuestReviewCount })</p>
            </div>
          </div>
        </div>
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
