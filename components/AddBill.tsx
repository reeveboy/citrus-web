import PlusBtn from "./PlusBtn";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { GetUnsettledBillsDocument, useCreateBillMutation } from "../generated";

const AddBill = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };
  const handleOnClick = () => {
    setModalShow(true);
  };

  const [createBill] = useCreateBillMutation({
    refetchQueries: [GetUnsettledBillsDocument, "getUnsettledBills"],
  });

  return (
    <>
      <div onClick={handleOnClick}>
        <PlusBtn />
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={modalShow}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Open a Bill
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex justify-center">
          <Formik
            initialValues={{ tableNo: null }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              if (!values.tableNo) {
                setSubmitting(false);
                return;
              }
              await createBill({ variables: { table_no: values.tableNo } });

              setSubmitting(false);
              resetForm();
              handleClose();
            }}>
            {({ isSubmitting, handleChange, handleBlur, values }) => (
              <Form className="flex justify-around w-1/2">
                <input
                  className=" border rounded py-2 px-3 text-grey-darker"
                  name="tableNo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tableNo}
                  placeholder="Enter table number"
                  type="number"
                  autoComplete="off"
                  min={0}
                />

                <button
                  className="hover:bg-blue-700 bg-blue-500 rounded  px-3 py-1  text-white text-center"
                  type="submit"
                  disabled={isSubmitting}>
                  Submit
                </button>
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

export default AddBill;
