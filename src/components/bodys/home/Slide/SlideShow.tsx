import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Slide.css'

import  Button  from '@mui/material/Button'

type Props = {}



  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '850px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const slideImages = [
    {
      url:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/3-1.jpg',
      
    },
    {
      url:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/1-1-1980x891.jpg',
      
    },
    {
      url:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/2-1-1980x891.jpg'
  
    },
  ];

const SlideShow = (props: Props) => {
  return (
    <div className="slide-container">
      <div className="seemore">
        <div className="box">
          <h1>Berita Muslim Life</h1>
          <p>สาระดีดี เพื่อตอบโจทย์วิถีมุสลิมเมือง</p>
        </div>
        <div className="box">
          <Button style={{backgroundColor:'green', color:'#fff'}}>SEE MORE MAGAZINE</Button>
        </div>
      </div>
    </div>
  );
}

export default SlideShow