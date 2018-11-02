import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import gen from 'random-seed';

import Loading from 'commons/Loading';

import Form from 'components/Form';
import Loop from 'components/Loop';
import Main from 'components/Main';

const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 4rem;
  padding-top: calc(4rem + env(safe-area-inset-top));
  padding-right: calc(4rem + env(safe-area-inset-top));
  padding-bottom: calc(4rem + env(safe-area-inset-top));
  padding-left: calc(4rem + env(safe-area-inset-top));

  ${props => (props.startSearch ? 'height: auto; overflow: visible;' : '')};

  @media screen and (max-width: 600px) {
    ${props => (!props.startSearch ? 'padding: 0;' : '')};
  }
`;

const MainContent = styled.div`
  height: calc(100% - 2rem);
  margin: 1rem;
  transition: height 0.2s ease, margin 0.2s ease;
  ${props => (props.startSearch ? 'height: 5rem; margin-left: 0; margin-right: 0;' : '')};
`;

const WrapperHome = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  max-width: 134rem;
  transition: max-width 0.2s ease;
  ${props => (props.startSearch ? 'max-width: 112rem' : '')};
`;

class Home extends React.Component {
  state = {
    list: undefined,
    searchText: undefined,
    startSearch: false,
  };

  componentDidMount() {
    this.generateGrid();
  }

  getList = () => {
    const random = gen();
    const list = [];
    const lengthList = random.intBetween(10, 20);
    for (let i = 0; i < lengthList; i += 1) {
      list[i] = i;
    }
    return list;
  };

  generateGrid = async () => {
    const list = await this.getList();
    this.setState({ list });
  };

  submit = event => {
    event.preventDefault();
    this.setState({ startSearch: true });
  };

  handleChange = event => {
    if (event.target.value) {
      this.setState({ searchText: event.target.value });
    } else {
      this.setState({ startSearch: false });
    }
  };

  randomGrid = (min, max) => {
    const random = gen();
    return random.intBetween(min, max);
  };

  render() {
    const { list, searchText, startSearch } = this.state;

    if (!list) {
      return <Loading />;
    }

    return (
      <LayoutWrapper startSearch={startSearch}>
        <MainContent startSearch={startSearch}>
          <WrapperHome startSearch={startSearch}>
            <Form
              {...this.props}
              handleChange={this.handleChange}
              submit={this.submit}
              startSearch={startSearch}
            />
            {!startSearch && <Loop {...this.props} list={list} randomGrid={this.randomGrid} />}
            {startSearch && (
              <Main
                {...this.props}
                list={list}
                randomGrid={this.randomGrid}
                searchText={searchText}
              />
            )}
          </WrapperHome>
        </MainContent>
      </LayoutWrapper>
    );
  }
}

export default injectIntl(Home);
