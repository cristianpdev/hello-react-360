// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const leftPanel = new Surface(700, 700, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(700, 700, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  r360.renderToSurface(
    r360.createRoot('hello_react_360'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('hello_react_360'),
    rightPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('chess-world.jpg'));
}

window.React360 = {init};
