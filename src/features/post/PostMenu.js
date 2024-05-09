import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import BuildIcon from "@mui/icons-material/Build";
import { useDispatch, useSelector } from "react-redux";
import EditPost from "./EditPost";

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

export default function UpdatePostList({ post }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [content, setContent] = React.useState(post.content);
  const dispatch = useDispatch();

  return (
    <div>
      <EditPost post={post} />
    </div>
  );
}
