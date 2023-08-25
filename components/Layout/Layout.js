import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CallIcon from "@mui/icons-material/Call";
import { Avatar, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
 
const Layout = ({ children }) => {
  return (
    <div div className="relative">
        <div style={{height: 30, background: 'green'}}>
      <Grid container justifyContent={'center'} style={{color: '#FFD700'}}>
        Đặt Lịch 24/7: 0933.487.304
      </Grid>
    </div>
      <Header />
      <div className="md:h-16"></div>
      <div className="md:px-32">{children}</div>

      <Footer />
      <div className="fixed  " style={{ bottom: 30, left: 30 }}>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          size="large"
          style={{
            backgroundColor: "green",
            color: "white",
            boxShadow: "rgba(149, 157, 165, 0.9) 0px 8px 24px",
          }}
          className="call_button"
        >
          <a href={"tel:+4733378901"}>
            {" "}
            <CallIcon />
          </a>
        </IconButton>
      </div>
      <div className="fixed  " style={{ bottom: 30, right: 30 }}>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          size="large"
          style={{
            backgroundColor: "#0c88ef",
            color: "white",
            boxShadow: "rgba(149, 157, 165, 0.9) 0px 8px 24px",
          }}
          className="call_button"
        >
          <a href={"https://www.facebook.com/messages/t/103908935633501"}>
            {" "}
            <Avatar
              alt="Remy Sharp"
              src="/assets/messenger.png"
              style={{ width: 25, height: 25 }}
            />
          </a>
        </IconButton>
      </div>
      <div className="fixed  " style={{ bottom: 90, right: 30 }}>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          size="large"
          style={{
            backgroundColor: "rgba(1, 72, 239, 0.6)",
            color: "white",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <a href={"https://zaloapp.com/qr/p/bf446jyiodv9"}>
          
          <Avatar
              alt="Remy Sharp"
              src="/assets/icons8-zalo-48.png"
              style={{ width: 25, height: 25 }}
            />
          </a>
        </IconButton>
      </div>
    </div>
  );
}; 

export default Layout;
