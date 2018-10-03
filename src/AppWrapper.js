import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import translations from './i18n';

import App from './pages/App';
import './index.css';

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

class AppWrapper extends React.Component {
  render() {
    const locale = this.props.language.locale;
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}
const mapStateToProps = state => ({
  language: state.language,
});

export default connect(
  mapStateToProps,
  null
)(AppWrapper);
