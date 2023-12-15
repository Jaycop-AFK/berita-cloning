import React, { useState } from "react";
import "./love.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import {  more } from "../../../data/Love";

type Props = {};

const More: React.FC<Props> = (props) => {

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 8; 

   // Calculate the index range for the current page
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = more.slice(indexOfFirstItem, indexOfLastItem);

   // Handle page change
   const handlePageChange = (
     event: React.ChangeEvent<unknown>,
     page: number
   ) => {
     setCurrentPage(page);
   };
  return (
    <div className="more">
      <Grid container spacing={4} justifyContent="center">
        {currentItems.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
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

      {/* Pagination component */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          count={Math.ceil(more.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );

            }
export default More