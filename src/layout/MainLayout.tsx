import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
export default function MainLayout(props: { children: any }): JSX.Element {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> Todo List App</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" p={2}>
        {props.children}
      </Box>
    </>
  );
}
