import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Cookie from 'js-cookie';

import { changeLanguage } from '../shared/actions';

class Nav extends React.Component {
  state = {
    localeList: ['en', 'fr'],
  };

  handleChangeLocale = event => {
    event.preventDefault();
    const {
      currentTarget: { innerText: locale },
    } = event;

    const previousLocale = Cookie.get('language');

    if (locale !== previousLocale) {
      Cookie.set('language', locale);
      this.props.changeLanguage(locale);
    }
  };

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <ul>
          {this.state.localeList.map((locale, index) => (
            <li key={index}>
              <a href="#language" onClick={this.handleChangeLocale}>
                {locale}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: locale => dispatch(changeLanguage(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
