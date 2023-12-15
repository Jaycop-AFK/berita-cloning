import React from "react";
import "./love.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import { Seccond } from "../../../data/Love";

type Props = {};

const Second: React.FC<Props> = (props) => {
  return (
    <div className="sec">
      
        <Grid container spacing={2} justifyContent="center">
          {Seccond.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={5}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap:'wrap'
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  marginTop: "5px",
                }}
              >
                {item.title}
              </p>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ marginTop: "10px" }}
              >
                <FiClock />
              </Typography>
            </Grid>
          ))}
        </Grid>
     
      <div className="boxer"></div>

      <div className="boxer"></div>
    </div>
  );
};

export default Second;
