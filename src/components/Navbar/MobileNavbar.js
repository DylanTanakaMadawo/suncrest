import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useUIContext } from "../../drawerContext";

import "./index.css";

export const MobileNavbar = () => {
  const { setDrawerOpen } = useUIContext();
  return (
    <div className="mobile-container">
      <div className="mobile-left">
        <h1>Suncrest</h1>
      </div>
      <div className="mobile-right">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
      </div>
    </div>
  );
};
