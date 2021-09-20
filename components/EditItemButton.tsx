import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { GetItemsDocument, useUpdateItemMutation } from "../generated";

const EditItemButton = ({ item, categories }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOnClick = () => {
    setModalShow(true);
  };

  const [updateItem] = useUpdateItemMutation({
    refetchQueries: [GetItemsDocument],
  });

  return (
    <>
      <button
        onClick={handleOnClick}
        className="rounded text-black text-center transform transition duration-150 ease-in hover:scale-125">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="25"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
      </button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}>
        <Modal.Header>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col justify-center items-center">
          <div>
            <Formik
              initialValues={{
                name: item.name,
                rate: item.rate,
                category_id: item.category_id,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);

                if (!values.name || !values.rate || !values.category_id) {
                  return;
                }

                await updateItem({
                  variables: {
                    id: parseInt(item.item_id),
                    name: values.name,
                    rate: values.rate,
                    category_id: parseInt(values.category_id),
                  },
                });

                setSubmitting(false);
                handleClose();
              }}>
              {({ handleChange, handleBlur, values, isSubmitting }) => (
                <Form
                  className="flex flex-col justify-center"
                  style={{ width: "500px" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Item Name: </span>
                    <input
                      className="border rounded px-2 truncate"
                      style={{ height: "40px" }}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-lg">Rate: </span>
                    <div>
                      <span className="text-lg">&#8377;</span>
                      <input
                        className="border rounded px-2"
                        style={{ height: "40px" }}
                        name="rate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rate}
                        placeholder="Rate"
                        min={1}
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg">Category: </span>
                    <div>
                      <select
                        className=" px-2 border"
                        style={{ height: "40px", width: "210px" }}
                        name="category_id"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category_id}>
                        <option selected value={item.category_id}>
                          {item.category_name}
                        </option>
                        {categories.map((category, idx) => (
                          <option key={idx} value={category.category_id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="mt-2 w-40 bg-emerald rounded-lg text-white py-2"
                      type="submit"
                      disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
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

export default EditItemButton;
