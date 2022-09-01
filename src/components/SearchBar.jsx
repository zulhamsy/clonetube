import React from "react";
import { Paper, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        display: "flex",
        borderRadius: 1,
        border: "1px solid #333",
        bgcolor: "#121212",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        onChange={() => {}}
        type="text"
        className="search-bar"
        placeholder="Search"
      />
      <ButtonBase type="submit" sx={{ py: 1, px: 2.5, bgcolor: "#313131" }}>
        <SearchIcon sx={{ color: "white" }} />
      </ButtonBase>
    </Paper>
  );
}
