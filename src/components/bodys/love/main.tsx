import React from "react";
import "./love.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import Seccond from '../love/Second'

type Props = {};

const main = (props: Props) => {
  return (
    <div className="main">
      <div className="boxer">
        <img
          src="https://images.alphacoders.com/108/1080557.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "auto", borderRadius: "20px" }}
        />

        <h1>
          อิสลามนำพาสู่ความสำเร็จ EP.22 เด็กธรรมดา สู่การเป็นผู้บริหาร EMPOWER
        </h1>
        <p>
          อิสลามนำพาสู่ความสำเร็จ EP.22 เด็กธรรมดา สู่การเป็นผู้บริหาร EMPOWER .
          มารุต เมฆลอย
          หนึ่งในนักธุรกิจที่นับได้ว่าชายคนนี้เขาประสบความสำเร็จในการทำงาน
          เขาเป็นเพียงแค่คนที่ชื่นชอบการใช้ภาษาอังกฤษ ชอบพูดคุยกับผู้คน
          และมีโอกาสได้ทำงาน ในบริษัท EMPOWER
          และพัฒนาการทำงานกลายมาเป็นผู้บริหารได้
          และปัจจุบันก็ยังทำงานควบคู่กับการดำลงตำแหน่งนายกสมาคม TMTA
          หากอยากรู้ว่าเขามีแนวคิดอย่างไร มีการทำงานในรูปแบบไหน
          ติดตามได้ในคลิปนี้ . #Beritamuslim
        </p>

        <Typography variant="body1" color="text.secondary">
          <FiClock /> 2022-04-20 14:36
        </Typography>
        
      </div>
      
      <div className="boxer"></div>
    </div>
  );
};

export default main;
