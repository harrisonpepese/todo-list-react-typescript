import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
export default function MainLayout(props: { children: any }): JSX.Element {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> To do List App</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" p={2} sx={{}}>
        {props.children}
      </Box>
    </>
  );
}
