import React from 'react';
import { Rings } from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    if (!this.props.isLoading) {
      return null;
    }

    return <Rings height={100} width={100} color="#4fa94d" />;
  }
}

export default Loader;
