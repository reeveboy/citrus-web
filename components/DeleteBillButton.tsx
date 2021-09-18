import React, { useState } from "react";
import { useDeleteBillMutation } from "../generated";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";

const DeleteBillButton = ({ bill_id }) => {
  const router = useRouter();

  const [modalShow, setModalShow] = useState(false);

  const [deleteBill] = useDeleteBillMutation();

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOnClick = () => {
    setModalShow(true);
  };

  const handleDeleteBill = async () => {
    await deleteBill({ variables: { bill_id: parseInt(bill_id) } });
    handleClose();
    router.push("/dashboard");
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className="ml-4 px-2 py-2 text-xl bg-redLight rounded-lg text-white hover:bg-redDark">
        Delete Bill
      </button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}>
        <Modal.Header>
          <Modal.Title>Delete Bill?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col justify-center items-center">
          <span className="text-lg">
            Are you sure you want to delete this Bill?
          </span>
          <div className="mt-2">
            <button
              onClick={handleDeleteBill}
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

export default DeleteBillButton;
