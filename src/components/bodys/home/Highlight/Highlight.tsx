import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    image:
      "https://play-lh.googleusercontent.com/zPeHPRczoAme_vTfz9fS62XiBElP8m7MSOC0SfOaV6X316rM6lGaTzwc4O7g8ReTK18c",
    title: "ศูนย์การเรียนรู้ กฟผ. คว้า 4 รางวัลกินรี",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/zPeHPRczoAme_vTfz9fS62XiBElP8m7MSOC0SfOaV6X316rM6lGaTzwc4O7g8ReTK18c",
    title: "ศูนย์การเรียนรู้ กฟผ. คว้า 4 รางวัลกินรี",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/zPeHPRczoAme_vTfz9fS62XiBElP8m7MSOC0SfOaV6X316rM6lGaTzwc4O7g8ReTK18c",
    title: "ศูนย์การเรียนรู้ กฟผ. คว้า 4 รางวัลกินรี",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/zPeHPRczoAme_vTfz9fS62XiBElP8m7MSOC0SfOaV6X316rM6lGaTzwc4O7g8ReTK18c",
    title: "ศูนย์การเรียนรู้ กฟผ. คว้า 4 รางวัลกินรี",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

export default function ColumnsGrid() {
  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={32}>
          {data.map((item, index) => (
            <Grid key={index} xs={8}>
              <Item>
                <img
                  style={{ width: "100%", height: "25%" }}
                  src={item.image}
                  alt=""
                />
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
