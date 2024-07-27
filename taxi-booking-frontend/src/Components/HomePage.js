import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Background from './Background';
import './styles.css'; // Import the CSS file

const App = () => (
  <MuiThemeProvider>
    <Background />
  </MuiThemeProvider>
);

export default App;
