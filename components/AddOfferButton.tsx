import PlusBtn from "./PlusBtn";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GetBillDocument, useAddOfferMutation } from "../generated";

const AddOfferButton = ({ bill_id, discount }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };
  const handleOnClick = () => {
    setModalShow(true);
  };

  const [addOffer] = useAddOfferMutation({ refetchQueries: [GetBillDocument] });

  return (
    <>
      <button
        onClick={handleOnClick}
        className="text-xl bg-blueLight px-1 py-1 rounded-lg text-white hover:bg-blueDark">
        Offers <span className="text-base">@{discount}%</span>:
      </button>
      <Modal aria-labelledby="contained-modal-title-vcenter" show={modalShow}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Offer Discount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex justify-center">
          <Formik
            initialValues={{ discount }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              console.log(values);
              if (!values.discount) {
                setSubmitting(false);
                return;
              }

              await addOffer({
                variables: { bill_id, discount: parseInt(values.discount, 10) },
              });

              setSubmitting(false);
              resetForm();
              handleClose();
            }}>
            {({ isSubmitting, handleChange, handleBlur, values }) => (
              <Form className="flex flex-col" style={{ width: "400px" }}>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Enter Discount: </span>
                  <input
                    className="border rounded py-1 px-2"
                    style={{ width: "150px", height: "40px" }}
                    name="discount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discount}
                    placeholder="Enter the %"
                    type="number"
                    min={1}
                    max={99}
                  />
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

export default AddOfferButton;
