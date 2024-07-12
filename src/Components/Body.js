import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../Styles/Body.css';

const Layout = () => {
    return (
      <div>
        <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={2}>
              <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1 }}>
                Side Content
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1 }}>
                Main Content
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box sx={{ backgroundColor: '#white', padding: 2, borderRadius: 1, boxShadow: '1px' }}>
                Side Content
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default Layout;