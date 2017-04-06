import React from 'react';

export default class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    console.log('#NoteDetail');
    console.dir(this.props);
  }

  render() {
    return (
      <div>
        <h2>Note Detail</h2>
        <p>ほげほげ</p>
      </div>
    );
  }
}
