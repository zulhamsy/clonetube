import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#202020"
      position="sticky"
      top={0}
      p={2}
    >
      {/* Logo as Link */}
      <Link to="/">
        <img src={logo} alt="CloneTube" style={{ height: "32px" }} />
      </Link>
      {/* Searchbar */}
      <SearchBar />
    </Stack>
  );
}
