import { Typography } from "@mui/material";

export default function PageTitle(props: { children: string }) {
  return (
    <Typography sx={{ marginBottom: 2 }} variant="h4">
      {props.children}
    </Typography>
  );
}
