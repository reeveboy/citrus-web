import React, { useState } from "react";
import { MeDocument, useLogoutMutation } from "../generated";
import Router from "next/router";
import { Modal, Button } from "react-bootstrap";

const LogoutButton = () => {
  const [modalShow, setModalShow] = useState(false);

  const [logout] = useLogoutMutation({ refetchQueries: [MeDocument] });

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOnClick = () => {
    setModalShow(true);
  };

  const handleLogout = async () => {
    await logout();
    handleClose();
    Router.push("/login"); // <-- push/replace doesn't work for some reason
    Router.reload();
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className="text-sideBarButtons hover:text-sideBarButtonHover absolute bottom-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-box-arrow-left"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
          />
        </svg>
      </button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}>
        <Modal.Header>
          <Modal.Title>Logout?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col justify-center items-center">
          <span className="text-lg">Do you want to logout?</span>
          <div className="mt-2">
            <button
              type="submit"
              onClick={handleLogout}
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

export default LogoutButton;
