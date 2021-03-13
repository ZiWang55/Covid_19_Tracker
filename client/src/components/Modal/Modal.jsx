import React from "react";
import Modal from "@material-ui/core";

function Modal() {
  return (
    <div>
      <Modal>
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        {body}
      </Modal>
    </div>
  );
}

