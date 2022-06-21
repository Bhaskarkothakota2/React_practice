import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Stack,
} from "@mui/material";

function MuiLoader(props) {
  return (
    <>
      <Dialog open={props.flag}>
        <DialogContent>
          <Stack width="400px" height="100px" alignItems={"center"}>
            <CircularProgress />
            <DialogTitle id="dialog-title">Please Wait Loading...</DialogTitle>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MuiLoader;
