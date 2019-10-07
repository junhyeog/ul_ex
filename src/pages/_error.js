import React from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p style={{position: "absolute", top: "10%"}}>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'Page not Found'}
      </p>
    );
  }
}

export default Error;