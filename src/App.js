import logo from './logo.svg';
import './App.css';
import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';
import RoomDesc from './components/RoomDesc';
import RoomServices from './components/RoomServices';
import Services from './components/Services';
import HotelServices from './components/HotelServices';
import Photos from './components/Photos';
import Ratings from './components/Ratings';
import SpaIcon from '@mui/icons-material/Spa';

function App() {
   return (
      <div className="App" style={{ backgroundColor: '#fbf9f6' }}>

         <Navbar />


         {/* <Container>
            <Grid container justifyContent="center" style={{ textAlign: 'center' }} >
               <Grid item md="12" xs={12} style={{ textAlign: 'center' }} direction="row"
                  alignItems="center"
                  justify="center">
                  <Stack direction="row" spacing={8} alignItems="center"
                     justify="center">
                     <Avatar src={SpaIcon} sx={{ width: '100px', height: '100px' }} />
                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '100px', height: '100px' }} />
                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '100px', height: '100px' }} />
                  </Stack>
               </Grid>
            </Grid>
         </Container> */}


         <Container>
            <Grid container my={3} py={3} style={{ display: 'flex', alignItems: 'center' }} spacing={4}>
               <Grid item md={6} xs={12} style={{ textAlign: 'right', }}>
                  <Typography >WE SEE THE RESULTS</Typography>
                  <Typography mb={3} variant="h5" >Give Us a Visit.</Typography>
                  <Typography mb={3} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptas inventore maiores dignissimos deserunt voluptatem laudantium saepe, corrupti quod excepturi tenetur labore aliquid officia nobis temporibus. Consequatur dolor repellendus minima.</Typography>
                  <Button variant="contained">Read More</Button>

               </Grid>

               <Grid item md={6} xs={12} style={{ textAlign: 'left', }}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
            </Grid>
         </Container>

         <Container>
            <Grid container my={3} py={3} style={{ display: 'flex', alignItems: 'center' }} spacing={4}>
               <Grid item md={6} xs={12} style={{ textAlign: 'left', }}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={6} xs={12} style={{ textAlign: 'left', }}>
                  <Typography >WE SEE THE RESULTS</Typography>
                  <Typography mb={3} variant="h5" >Give Us a Visit.</Typography>
                  <Typography mb={3} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptas inventore maiores dignissimos deserunt voluptatem laudantium saepe, corrupti quod excepturi tenetur labore aliquid officia nobis temporibus. Consequatur dolor repellendus minima.</Typography>
                  <Button variant="contained">Read More</Button>
               </Grid>
            </Grid>
         </Container>

         <Container>
            <Grid container my={3} py={3} style={{ display: 'flex', alignItems: 'center' }} spacing={1}>
               <Grid item md={12} mb={2} xs={12} style={{ textAlign: 'center', }} >
                  <Typography >TREATMENTS</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Your key to relaxed life.</Typography>
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
            </Grid>
         </Container>

         <Container>
            <Grid container my={3} py={3} style={{ display: 'flex', alignItems: 'center' }} spacing={2}>
               <Grid item md={12} mb={2} xs={12} style={{ textAlign: 'center', }} >
                  <Typography >OUR TEAM</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Master of massage.</Typography>
                  <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore repellat provident eos necessitatibus</Typography>
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={3} xs={12}>
                  <img src="massage.JPG" style={{ width: '100%' }} />
               </Grid>
               <Grid item md={12} xs={12}>
                  <Button variant="contained">Show more...</Button>
               </Grid>

            </Grid>
         </Container>

      </div >
   );
}

export default App;
