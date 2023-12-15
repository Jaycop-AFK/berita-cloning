import React from "react";
import "../Love/love.css";

import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";

import Main from "../../components/bodys/love/main";
import Seccond from "../../components/bodys/love/Second";
import More from "../../components/bodys/love/More";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


import "../Portfolio/portfolio.css";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {};

const Mullaf = (props: Props) => {
  return (
    <div>
      <div className="header">
        <h1>Berita Muslim</h1>
        <p>
          ขอต้อนรับพี่น้องมุสลิมทุกท่านสู่ช่อง "BERITA MUSLIM"
          สาระความรู้ดีๆในศาสนาอิสลามที่นำมาฝากทั้งมุสลิมีนและมุสลิมะห์
          ไม่ว่าจะเรื่องความรัก คำสอน
          ข้อมูลต่างๆในศาสนาอิสลามหรือสิ่งไหนที่ทุกคนอยากรู้
          เราจะนำคอนเทนต์ดีๆที่ฮาลาลมาให้ทุกคนได้รับชมกัน
        </p>
      </div>

      <Container maxWidth="lg" className="container">
        <div className="boxlove">
          <Main />
          <Seccond />
        </div>
        <More />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Mullaf;
