import React from "react";
import { Drawer, IconButton, List, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../drawerContext";

import { Link } from "react-router-dom";

import "./index.css";

export const NavbarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <div>
      <>
        {drawerOpen && (
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{
              position: "fixed",
              top: 5,
              left: "46%",
              zIndex: 1999,
            }}
          >
            <CloseIcon
              sx={{
                fontSize: "2rem",
                color: "black",
              }}
            />
          </IconButton>
        )}
        <Drawer open={drawerOpen}>
          <div className="drawer-list-container">
            <div className="drawer-top">
              <List className="drawer-list">
                <ListItemText>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: '"Lato", sans-serif',
                      fontSize: "20px",
                    }}
                  >
                    Home
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: '"Lato", sans-serif',
                      fontSize: "20px",
                    }}
                  >
                    About
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: '"Lato", sans-serif',
                      fontSize: "20px",
                    }}
                  >
                    Results
                  </Link>
                </ListItemText>
                <ListItemText>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: '"Lato", sans-serif',
                      fontSize: "20px",
                    }}
                  >
                    Services
                  </Link>
                </ListItemText>
                {/* <ListItemText>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Contact Us
                  </Link>
                </ListItemText> */}
              </List>
            </div>
            {/* <div className="drawer-bottom">
              <h1>Bottom</h1>
            </div> */}
          </div>
        </Drawer>
      </>
    </div>
  );
};
