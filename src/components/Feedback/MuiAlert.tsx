import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>This is an error alert
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>This is an warning alert
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>This is an info alert
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>This is an success alert
      </Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClick={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};
