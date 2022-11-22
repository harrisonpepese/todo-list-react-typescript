import { Typography } from "@mui/material";

export default function PageTitle(props: { children: string }) {
  return (
    <Typography data-testid="page-title" sx={{ marginBottom: 2 }} variant="h4">
      {props.children}
    </Typography>
  );
}
