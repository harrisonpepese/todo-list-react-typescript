import { Grid } from "@mui/material";
import { ReactNode } from "react";
import PageTitle from "../components/commons/pageTitle";

export default function BaseLayout(props: {
  children: ReactNode;
  title: string;
}) {
  const { title, children } = props;
  return (
    <Grid container padding={2} justifyContent="center">
      <Grid xs={12}>
        <PageTitle>{title}</PageTitle>
      </Grid>
      {children}
    </Grid>
  );
}
