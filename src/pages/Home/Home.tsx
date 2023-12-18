import React from 'react'
import SlideShow from '../../components/bodys/home/Slide/SlideShow'
import Advert from '../../components/bodys/home/Advert/Advert'
import Menu from '../../components/bodys/home/Menu/Menu'
import Highlight from '../../components/bodys/home/Highlight/Highlight'
import  Container  from '@mui/material/Container'
import Grid from "@mui/material/Grid";
import Clipvideo from '../../components/bodys/home/Clipvideo/Clipvideo'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Container className="containerHome">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <SlideShow />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Advert />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Menu />
          </Grid>
        </Grid>
      </Container>
      <div style={{ backgroundColor: "red" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Highlight />
        </Grid>
      </div>
      <Container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Clipvideo />
        </Grid>
      </Container>
    </div>
  );
}

export default Home