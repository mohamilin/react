import React from 'react';

// Import tambahan:
import Header from './components/Header';
import ContainerCart from './components/ContainerCart';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <CssBaseline />
      <br/> <br/> <br/>
      <Container maxWidth="sm">
          <ContainerCart/>
      </Container>
    </React.Fragment>
  );
}

export default App;
