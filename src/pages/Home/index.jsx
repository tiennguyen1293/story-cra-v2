import React from 'react';
import { injectIntl } from 'react-intl';
import Layouts from 'layouts';

import ContentMain from './components/ContentMain';

class Home extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {}

  render() {
    const { loading } = this.state;

    return (
      <Layouts loading={loading}>
        <ContentMain data="test" />
      </Layouts>
    );
  }
}

export default injectIntl(Home);
