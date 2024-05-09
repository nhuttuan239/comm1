import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Typography } from "@mui/material";
import { deletePost } from "../features/post/postSlice";
import { deleteComment } from "../features/comment/commentSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function DeleteComfirm({ blank, title, text, name }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (title) {
      case "Delete":
        dispatch(deletePost({ postId: blank._id }));
        break;
      case "Comment":
        dispatch(deleteComment({ commentId: blank._id }));
        // dispatch(getComments({ postId: blank._id }))
        break;
      default:
        break;
    }
    handleClose();
  };

  return (
    <div>
      <Button variant="text" onClick={handleOpen} startIcon={<DeleteIcon />}>
        Delete Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={2}
            fontFamily="cursive"
          >
            <Typography variant="h5" fontWeight="bold">
              Do you want to delete ?
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "text.secondary" }}
            >
              {name} {blank.content}
            </Typography>
            <Stack spacing={3} direction="row">
              <Button variant="outlined" onClick={handleSubmit}>
                {title}
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
