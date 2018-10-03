import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layouts from '../../layouts';

import Home from '../Home';
import About from '../About';
import Topics from '../Topics';
import Topic from '../Topic';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layouts>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route exact path="/topics" render={() => <h1>Select Topic</h1>} />
          <Route path={`/topics/:topicId`} component={Topic} />
        </Layouts>
      </Router>
    );
  }
}

export default App;
