import React from "react";
import { Paper, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      elevation={0}
      sx={{
        display: "flex",
        borderRadius: 1,
        border: "1px solid #313131",
        bgcolor: "background.default",
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
        <SearchIcon sx={{ color: "grey.500" }} />
      </ButtonBase>
    </Paper>
  );
}
