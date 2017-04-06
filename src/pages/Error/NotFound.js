import React from 'react';

import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';

export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalHeader />

        <h2>Not Found.</h2>
      </div>
    );
  }
}
