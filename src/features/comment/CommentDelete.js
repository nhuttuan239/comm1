import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import DeleteIcon from "@mui/icons-material/Delete";
import CommentList from "./CommentList";
import { Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function CommentDelete({ postId }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{ color: "error.main" }}
        variant="outlined"
        onClick={handleOpen}
        startIcon={<DeleteIcon />}
      >
        Comment Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            spacing={3}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box sx={{ flexGrow: 1 }}>
              <CommentList postId={postId} />
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
