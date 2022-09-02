import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

import { categories } from "../utils/constants";

const selectedMenu = "Home";
export default function Sidebar() {
  return (
    <List>
      {categories.map((category) => {
        return (
          <ListItem key={category.name} disablePadding>
            <ListItemButton
              selected={selectedMenu === category.name}
              sx={{
                py: 1,
                pl: 3,
                pr: 5,
                gap: 3,
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
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
