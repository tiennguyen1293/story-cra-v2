import React from 'react';
import { injectIntl } from 'react-intl';

import messages from 'shared/messages';

class Footer extends React.Component {
  render() {
    const {
      intl: { formatMessage },
    } = this.props;

    return <div>{formatMessage(messages.title)}</div>;
  }
}

export default injectIntl(Footer);
