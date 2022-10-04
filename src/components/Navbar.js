import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Container, Divider, Grid, Typography } from '@mui/material';

export default function Navbar() {
   return (
      <>
         <Container>
            <Grid container py={4} style={{ display: 'flex', alignItems: 'center' }}>
               <Grid item md={4} mt={2} xs={12} style={{ textAlign: 'left' }}>
                  <Typography mb={2} variant="h5" >millious</Typography>
               </Grid>
               <Grid item md={4} mt={2} xs={12} style={{ display: 'flex' }}>
                  <Typography variant="h6" mx={2} >Home</Typography>
                  <Typography variant="h6" mx={2} >Booking</Typography>
                  <Typography variant="h6" mx={2} >Shop</Typography>
                  <Typography variant="h6" mx={2} >Blog</Typography>
                  <Typography variant="h6" mx={2} >Features</Typography>
               </Grid>
               <Grid item mt={2} md={4} xs={12} style={{ textAlign: 'right', }}>
                  <SearchIcon />
                  &nbsp;&nbsp;&nbsp;
                  <BookmarkBorderIcon />
                  &nbsp;&nbsp;&nbsp;
                  <AddShoppingCartIcon />
               </Grid>
            </Grid>
         </Container>

         <Divider />
      </>
   )
}
