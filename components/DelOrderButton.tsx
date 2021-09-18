import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetBillDocument, useDeleteOrderMutation } from "../generated";

const DelOrderButton = ({ item_id, bill_id }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOnClick = () => {
    setModalShow(true);
  };

  const [deleteOrder] = useDeleteOrderMutation({
    refetchQueries: [GetBillDocument],
  });

  const handleDeleteOrder = async () => {
    await deleteOrder({ variables: { item_id, bill_id } });
    handleClose();
  };

  return (
    <>
      <button
        className="rounded text-black text-center transform transition duration-150 ease-in hover:scale-125"
        onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="25"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}>
        <Modal.Header>
          <Modal.Title>Delete Order?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col justify-center items-center">
          <span className="text-lg">Are you sure?</span>
          <div className="mt-2">
            <button
              onClick={handleDeleteOrder}
              className="bg-red-500 text-white rounded-md px-3 py-2 w-20 hover:bg-red-700">
              Yes
            </button>
            <button
              onClick={handleClose}
              className="ml-2 bg-blue-500 text-white rounded-md px-3 py-2 w-20 hover:bg-blue-700">
              No
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DelOrderButton;
