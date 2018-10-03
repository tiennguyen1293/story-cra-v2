import React from 'react';
import * as L from 'react-loadable';

const Loadable = opts =>
  L({
    loading: () => <div>Loading...</div>,
    delay: 300,
    ...opts,
  });

export default Loadable;
