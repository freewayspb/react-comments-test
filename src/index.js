import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import { store } from './store';
import CommentsList from './components/Comments';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment, faStar } from '@fortawesome/free-solid-svg-icons';

// font-awesome icons
library.add(faHeart, faComment, faStar);

// fonts loading
WebFont.load({
  google: {
    families: ['"Open Sans" Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <CommentsList />
  </Provider>,
  document.getElementById('app')
);
