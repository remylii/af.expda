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

  priceDescription(hotel) {
    function amountFormat(str) {
        var num = new String(str).replace(/,/g, "");
        while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
        return num;
    }

    const total_value = parseInt(hotel.Price.TotalRate.Value);
    const amount = amountFormat(total_value);
    let promotion;

    if (hotel.Promotion) {
      let promotion_amount = amountFormat(total_value - parseInt(hotel.Promotion.Amount.Value));
      promotion = (
        <div className="promotion-box">
          <p className="promotion-arrow"></p>
          <div>
            <p className="promotion-description">{ hotel.Promotion.Description }</p>
            <div className="rate promotion-rate"><b>{ promotion_amount }</b>円</div>
          </div>
        </div>
      );
    }

    return (
      <div className="price-description">
        <div className="price-box">
          <p>料金平均</p>
          <div className="rate total-rate"><b>{ amount }</b>円</div>
        </div>
        { promotion }
      </div>
    );
  }

  render() {
    console.dir(this.props.hotel);
    const hotel = this.props.hotel;
    let amenities = '';

    if (!hotel.HotelID) {
      return this.emptyDetail();
    }

    if (typeof hotel.AmenityList.Amenity === 'string') {
      amenities = hotel.AmenityList.Amenity;
      // amenities.push(<li key='hotel-amenitylist-amenity-0'>{ hotel.AmenityList.Amenity }</li>);
    } else {
      amenities = hotel.AmenityList.Amenity.join(', ');
      // for (let v in hotel.AmenityList.Amenity) {
      //   amenities.push(<li key={`hotel-amenitylist-amenity-${v}`}>{ hotel.AmenityList.Amenity[v] }</li>);
      // }
    }

    const FacilityImage = this.largeImage(hotel.ThumbnailUrl);

    const PriceDescription = this.priceDescription(hotel);

    return (
      <div className="FacilityDetail">
        <h1 className="FacilityDetail-title">{ hotel.Name }</h1>
        <div className="FacilityDetail-item panel">
          <div className="image">
            { FacilityImage }
          </div>
          <div className="presentation">
            <div className="description">
              <p className="linear">{ hotel.Location.Province } { hotel.Location.City } { hotel.Location.StreetAddress } [{ hotel.Location.Country }]</p>
              <p>{ hotel.Location.GeoLocation.Latitude }, { hotel.Location.GeoLocation.Longitude }</p>
              <p className="linear">{ hotel.Description }</p>
            </div>
            <div className="description">
              <p>{ this.iconStar(hotel.StarRating) } { hotel.GuestRating } / ReviewCount: ({ hotel.GuestReviewCount })</p>
            </div>
            { PriceDescription }
          </div>
        </div>
        <h2 className="FacilityDetail-title">Status</h2>
        <div className="FacilityDetail-item">
          <dl>
            <dt>詳細</dt>
            <dd><a href={ hotel.DetailsUrl } className="btn btn-default" target="_blank">詳細リンク</a></dd>
            <dt>チェックイン</dt>
            <dd>{ hotel.CheckInStartTime }{ (hotel.CheckInEndTime) ? ' 〜 ' + hotel.CheckInEndTime : '' }</dd>
            <dt>チェックアウト</dt>
            <dd>{ hotel.CheckOutTime }</dd>
            <dt>ホテルID</dt>
            <dd>{ hotel.HotelID }</dd>
            <dt>アメニティ</dt>
            <dd>{ amenities }</dd>
            <dt>HotelMandatoryTaxesAndFees</dt>
            <dd>{ (!hotel.HotelMandatoryTaxesAndFees) ? 'なし' : hotel.HotelMandatoryTaxesAndFees.Value }</dd>
          </dl>
        </div>
      </div>
    );
  }
}
