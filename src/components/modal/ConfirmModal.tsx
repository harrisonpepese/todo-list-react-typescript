import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
const sx: SxProps = {
  position: "absolute",
  bottom: "50%",
  right: "50%",
  transform: "translate(50%,50%)",
};
export function ConfirmModal(props: {
  open: boolean;
  index: number;
  message: string;
  onSubmit: (index: number) => void;
  onClose: () => void;
}) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Card sx={sx}>
        <CardContent>
          <Grid
            flexGrow={1}
            spacing={3}
            container
            justifyContent="space-between"
          >
            <Grid item xs={12} textAlign="center">
              <Typography>{props.message}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth onClick={props.onClose}>
                cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={() => {
                  props.onSubmit(props.index);
                  props.onClose();
                }}
                variant="contained"
              >
                confirm
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
}
