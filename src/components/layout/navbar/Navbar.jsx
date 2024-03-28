import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "spaceBetween",
        alignItems: "center",
        postion: "fixed",
        top: 0,
        height: "80px",
        width: "100%",
        backgroundColor: "#794a28",
        gap: "5rem",
        marginRight: "50px",
        textAlign: "center",
      }}
    >
      <h3>Logo</h3>
      <ul>
        <li>Brownies</li>
        <li>Tortas</li>
        <li>Galletitas</li>
      </ul>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};
