import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo.svg';
import messages from '../shared/messages';

const WrapperHome = styled.form`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 134rem;
  transition: max-width 0.2s ease;
`;

const WrapperLogo = styled.img``;

class ContainerMain extends React.Component {
  render() {
    const {
      intl: { formatMessage },
      data,
    } = this.props;

    return (
      <WrapperHome>
        <WrapperLogo src={Logo} />
        <h1>{formatMessage(messages.title)}</h1>
        <h2>{formatMessage(messages.contentMain)}</h2>
        <span>{data}</span>
      </WrapperHome>
    );
  }
}

export default ContainerMain;
