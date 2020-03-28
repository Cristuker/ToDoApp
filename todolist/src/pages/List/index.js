import React from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';


function Main() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "'Noto Sans JP', sans-serif",
        'Arial'
      ].join(','),
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Typography>To Do List</Typography>
        <Container>
          Aqui vai o meu app
      </Container>
      </Container>
    </ThemeProvider>
  );
}

export default Main;