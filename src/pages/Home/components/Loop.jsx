import React from 'react';
import styled from 'styled-components';

const WrapperLoop = styled.div`
  position: absolute;
  top: 0;
  left: 72rem;
  right: 0;
  bottom: 0;
`;

const GridWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-gap: 3.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 0.5rem;
  width: 73rem;

  ${props => `transform: translateY(${props.loops})px`};
`;

const Grid = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 2rem;
  margin: 0;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 0 rgba(137, 149, 162, 0.32);
  font-size: 2rem;
  transition: all 1s ease;
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

class Loop extends React.Component {
  grid1 = React.createRef();

  grid2 = React.createRef();

  componentDidMount() {
    this.setupLoop();
  }

  setupLoop = () => {
    const { list } = this.props;
    const gridHeight = this.grid1.current.offsetHeight;
    const gridGap = list.length;
    const loops = [0, gridHeight + gridGap];
    let last = -1;
    const update = now => {
      requestAnimationFrame(update);
      const dt = last < 0 ? 0 : now - last;
      last = now;

      loops[0] -= dt * 0.02;
      loops[1] -= dt * 0.02;

      if (loops[0] < -gridHeight - 50 - gridGap) {
        loops[0] = loops[1] + gridHeight + gridGap;
      }
      if (loops[1] < -gridHeight - 50 - gridGap) {
        loops[1] = loops[0] + gridHeight + gridGap;
      }

      if (this.grid1.current && this.grid2.current) {
        this.grid1.current.style.transform = `translateY(${loops[0]}px)`;
        this.grid2.current.style.transform = `translateY(${loops[1]}px)`;
      }
    };
    requestAnimationFrame(update);
  };

  render() {
    const { list, randomGrid } = this.props;

    return (
      <WrapperLoop>
        <GridWrapper ref={this.grid1}>
          {list.map(item => (
            <Grid key={item} height={randomGrid(1, 3)} background={randomGrid(1, 5)} />
          ))}
        </GridWrapper>
        <GridWrapper ref={this.grid2}>
          {list.map(item => (
            <Grid key={item} height={randomGrid(1, 3)} background={randomGrid(1, 5)} />
          ))}
        </GridWrapper>
      </WrapperLoop>
    );
  }
}

export default Loop;
