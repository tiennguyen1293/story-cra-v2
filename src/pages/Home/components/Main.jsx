import React from 'react';
import styled from 'styled-components';

const WrapperMain = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 5rem;
  margin-bottom: 4rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  grid-auto-rows: 0.5rem;
  padding-bottom: 4rem;
  padding-bottom: calc(4rem + env(safe-area-inset-bottom));

  @media screen and (max-width: 710px) {
    grid-gap: 2rem;
    padding-bottom: calc(2rem + env(safe-area-inset-bottom));
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

const Grid = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 0 rgba(208, 223, 232, 0.35);
  overflow: hidden;
  transition: box-shadow 1s ease;
  grid-row-end: ${props => (props.height === 1 ? 'span 5' : props.height === 2 ? 'span 7' : 'span 9')};
  background: ${props => (props.background === 1
    ? props.theme.blue
    : props.background === 2
      ? props.theme.purple
      : props.background === 3
        ? props.theme.heaven
        : props.background === 4
          ? props.theme.blush
          : props.theme.death)};
`;

class Main extends React.PureComponent {
  render() {
    const { list, searchText, randomGrid } = this.props;

    return (
      <WrapperMain>
        <Title>{searchText}</Title>
        <GridWrapper>
          {list.map(item => (
            <Grid key={item} height={randomGrid(1, 3)} background={randomGrid(1, 5)} />
          ))}
        </GridWrapper>
      </WrapperMain>
    );
  }
}

export default Main;
