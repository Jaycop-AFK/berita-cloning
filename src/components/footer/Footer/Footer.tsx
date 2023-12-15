import React from "react";
import { BsFillTelephoneFill, BsMap, BsMailboxFlag } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLine,
  FaSearch,
} from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import 'Footer/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#212121",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ flex: 1, fontFamily: "Arial, sans-serif" }}>
        <h3>ABOUT US</h3>
        <p style={{ textAlign: "start" }}>
          เราจึงขอเป็นส่วนหนึ่งในความรู้ดีๆ ที่คุณแสวงหา Berita Muslim Mag
          เราพร้อมเสิร์ฟอาหารฮาลาลให้กับสมองของคุณ
          ในรูปแบบนิตยสารและสื่อดิจิทัลที่นำเสนอสาระเชิงสร้างสรรค์เพื่อพัฒนาชีวิตและสังคมมุสลิม
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <h3>CONTACT US</h3>
        <ul style={{ textAlign: "start" }}>
          <li>
            <BsMap />
            Beritamuslimmag 199/19 วิภาวดีรังสิต สามแสนใน พญาไท 10400 กทม.
          </li>
          <li>
            <BsFillTelephoneFill />
            02-616-3400
          </li>
          <li>
            <BsMailboxFlag />
            beritamuslimgroup@gmail.com
          </li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Follow US</h3>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaLine />
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="search"
            placeholder="Search…"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="start">
                  <Button>
                    <FaSearch style={{ color: "#fff" }} />
                  </Button>
                </InputAdornment>
              ),
              style: { color: "#fff" },
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
