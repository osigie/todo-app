import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/hooks";
import { closeModal, openModal } from "../features/todoSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem"
};

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function BasicModal({ children, title }: Props) {
  const { modalOpen } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const handleOpen = () => dispatch(openModal());
  const handleClose = () => dispatch(closeModal());

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
