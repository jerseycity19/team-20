import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { withRouter } from 'react-router-dom';

class Survey extends Component {
  render() {
     return <ReactTypeformEmbed url="https://thomaswestfall.typeform.com/to/CowsJf" />;
     
  }
}

export default withRouter(Survey);

