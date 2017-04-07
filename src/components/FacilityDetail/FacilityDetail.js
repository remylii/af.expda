import React from 'react';

export default class FacilityDetail extends React.Component {

  render() {
    const { id, Name, Description } = this.props.hotel;

    return (
      <div>
        <h2>{Name}</h2>
        <p>No. {id}</p>
        <p>{Description}</p>
      </div>
    );
  }
}
