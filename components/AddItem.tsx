import React from "react";
import { Formik, Form } from "formik";

const AddItem = () => {
  return (
    <div className="flex flex-col p-2 rounded-lg bg-gray-100">
      <span className="text-xl border-b border-black">Add New Item</span>
      <Formik
        initialValues={{ name: "", rate: "", category: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          setSubmitting(false);
        }}>
        {({ handleChange, handleBlur, values, isSubmitting }) => (
          <Form className="flex flex-col">
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg">Item Name: </span>
              <input
                className="rounded-lg px-2"
                style={{ height: "40px" }}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter Item Name"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg">Item Rate: </span>
              <input
                className="rounded-lg px-2"
                style={{ height: "40px" }}
                name="rate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
                placeholder="Enter Item Rate"
                type="number"
              />
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg">Category: </span>
              <input
                className="rounded-lg px-2"
                style={{ height: "40px" }}
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                placeholder="Enter Category"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="mt-2 flex justify-center">
              <button
                style={{ height: "40px" }}
                className="px-3 text-white rounded-lg bg-emerald hover:bg-emeraldDark"
                type="submit"
                disabled={isSubmitting}>
                Add Item
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddItem;
