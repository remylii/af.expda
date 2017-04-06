import React from 'react';

export default class FacilityDetail extends React.Component {

  render() {
    return (
      <div>
        <h2>FacilityDetail</h2>
        <p>{this.props.match.params.id}が指定されてる</p>
      </div>
    );
  }
}
