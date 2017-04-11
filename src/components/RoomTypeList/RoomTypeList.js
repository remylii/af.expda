import React from 'react';

export default class RoomTypeList extends React.Component {

  roomDetail(key, room) {
    return (
      <div key={key}>
        <h5>{room.Description}</h5>
        <dl>
          <dt>Price</dt>
          <dd>
            {room.Price.BaseRate.Value}
            {room.Price.TaxRcAndFees.Value}
            {room.Price.TotalRate.Value}
          </dd>
          <dt>HotelMandatoryTaxesAndFees</dt>
          <dd>
            { (!room.HotelMandatoryTaxesAndFees) ? '' : room.HotelMandatoryTaxesAndFees.Value }
          </dd>
        </dl>
      </div>
    );
  }

  render() {
    console.log('RoomTypeList# render');

    const roomList = (!this.props.roomTypeList) ? [] : this.props.roomTypeList.RoomType;
    const items = [];

    for (let i in roomList) {
      items.push(this.roomDetail(`room-type-list-${i}`, roomList[i]));
    }

    return (
      <div>
        <h4>Room type list</h4>
        { items }
      </div>
    );
  }
}
