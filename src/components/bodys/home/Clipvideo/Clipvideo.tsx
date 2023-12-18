import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'

import Slider from 'react-slick'

import React from 'react'

type Props = {}

const Clipvideo = (props: Props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <div>
      <Container style={{ backgroundColor: "gray" }}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <Grid style={{ textAlign: "start" }}>
              <h2>Clip Video</h2>
            </Grid>
            <Grid style={{ textAlign: "start" }}>
              <p>
                ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
                สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
                เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
              </p>
            </Grid>
            <Grid>
              <Slider {...settings}>

              </Slider>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            b2
          </Grid>
          <Grid item xs={7}>
            c3
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Clipvideo