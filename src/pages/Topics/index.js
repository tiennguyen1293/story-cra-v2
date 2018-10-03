import React from 'react';
import { Link } from 'react-router-dom';

class Topics extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Topics;
