import React from 'react';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';
import styled from 'styled-components';

import * as actions from 'shared/actions';

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

class Nav extends React.Component {
  state = {
    localeList: ['vi', 'en', 'fr'],
  };

  handleChangeLocale = event => {
    event.preventDefault();
    const { changeLanguage } = this.props;

    const {
      currentTarget: { innerText: locale },
    } = event;

    const previousLocale = Cookie.get('language');

    if (locale !== previousLocale) {
      Cookie.set('language', locale);
      changeLanguage(locale);
    }
  };

  render() {
    const { localeList } = this.state;

    return (
      <NavWrapper>
        <ul>
          {localeList.map((locale, index) => (
            <li key={index}>
              <a href="#language" onClick={this.handleChangeLocale}>
                {locale}
              </a>
            </li>
          ))}
        </ul>
      </NavWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: locale => dispatch(actions.changeLanguage(locale)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Nav);
