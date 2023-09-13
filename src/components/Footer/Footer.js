import React from "react";

import {
  Email,
  Phone,
  Instagram,
  Facebook,
  YouTube,
} from "@mui/icons-material";

import "./Footer.css";
import { Link } from "react-router-dom";
import { Divider, List, ListItemButton } from "@mui/material";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-left-part">
          <Link className="footer-link">Home</Link>
          <Link className="footer-link">About</Link>
          <Link className="footer-link">Results</Link>
          <Link className="footer-link">Services</Link>
        </div>
        <Divider
          sx={{
            color: "white",
            marginLeft: "50px",
            marginTop: "20px",
            "&::before, &::after": {
              borderColor: "gray",
            },
          }}
          orientation="vertical"
          flexItem
        >
          <h3 style={{ fontStyle: "italic", color: "gray" }}>Suncrest</h3>
        </Divider>
        <div className="footer-right-part">
          <List sx={{ marginTop: "100px" }}>
            <ListItemButton>
              <Email />
              <p>Email </p>
            </ListItemButton>
            <ListItemButton>
              <Phone />
              <p>Phone</p>
            </ListItemButton>
            <ListItemButton>
              <Instagram />
              <p>Instagram</p>
            </ListItemButton>
            <ListItemButton>
              <Facebook />
              <p>Facebook</p>
            </ListItemButton>
            <ListItemButton>
              <YouTube />
              <p>YouTube</p>
            </ListItemButton>
          </List>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright Suncrest | All Rights Reserved | 2023 </p>
      </div>
    </div>
  );
};
