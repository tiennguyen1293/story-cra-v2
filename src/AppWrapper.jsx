import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import viLocaleData from 'react-intl/locale-data/vi';
import frLocaleData from 'react-intl/locale-data/fr';

import GlobalStyles from './globalStyles';
import translations from './i18n';
import App from './pages/App';

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
addLocaleData(viLocaleData);

const theme = {
  white: '#ffffff',
  black: '#6f757d',
  blue: '#c8d4e2 ',
  purple: '#e5e8f4',
  heaven: '#f0e5ed',
  blush: '#f5e1e5',
  death: '#e8dada',
  mainBackground: 'linear-gradient(to right, #c8d4e2, #e5e8f4, #f0e5ed, #f5e1e5, #e8dada)',
  fontFamily: 'Helvetica Neue',
};

class AppWrapper extends React.Component {
  render() {
    const { language } = this.props;
    const messages = translations[language];

    return (
      <IntlProvider locale={language} key={language} messages={messages}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <App />
            <GlobalStyles />
          </React.Fragment>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}
const mapStateToProps = state => ({
  language: state.language,
});

export default connect(
  mapStateToProps,
  null,
)(AppWrapper);
