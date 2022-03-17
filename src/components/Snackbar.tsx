import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Slide, SnackbarContent } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="down" />;
};

const PostSnackbar = (props: {
  message: string;
  backgroundColor: string;
  color: string;
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={TransitionUp}
      autoHideDuration={8000}
      onClose={handleClose}
    >
      <SnackbarContent
        message={props.message}
        action={action}
        style={{
          color: props.color,
          backgroundColor: props.backgroundColor,
        }}
      />
    </Snackbar>
  );
};

export default PostSnackbar;
