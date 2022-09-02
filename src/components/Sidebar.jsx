import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

import { categories } from "../utils/constants";

export default function Sidebar({ selectedMenu, onChangeMenu }) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        px: { xs: 1, md: 0 },
        overflowX: "scroll",
      }}
    >
      {categories.map((category) => {
        return (
          <ListItem key={category.name} disablePadding>
            <ListItemButton
              onClick={() => onChangeMenu(category.name)}
              selected={selectedMenu === category.name}
              sx={{
                py: 1,
                pl: 3,
                pr: 5,
                gap: 3,
                borderRadius: {
                  xs: 10,
                  md: 0,
                },
                "&.MuiListItemButton-root.Mui-selected": {
                  bgcolor: "action.selected",
                },
                "&.MuiListItemButton-root.Mui-selected .MuiListItemIcon-root": {
                  color: "grey.200",
                },
                "&.MuiListItemButton-root.Mui-selected .MuiTypography-root": {
                  fontWeight: 500,
                  color: "grey.200",
                },
              }}
            >
              {/* Icon */}
              <ListItemIcon sx={{ color: "grey.600", minWidth: 0 }}>
                {category.icon}
              </ListItemIcon>
              {/* Text */}
              <ListItemText
                primary={category.name}
                primaryTypographyProps={{
                  sx: {
                    color: "grey.500",
                  },
                  noWrap: true,
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
