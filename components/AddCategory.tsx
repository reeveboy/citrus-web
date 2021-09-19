import React from "react";
import { Formik, Form } from "formik";

const AddCategory = () => {
  return (
    <div className="mt-2 flex flex-col p-2 rounded-lg bg-gray-100">
      <span className="text-xl border-b border-black">Add New Category</span>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          setSubmitting(false);
        }}>
        {({ handleChange, handleBlur, values, isSubmitting }) => (
          <Form className="flex flex-col">
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg">Category Name: </span>
              <input
                className="rounded-lg px-2"
                style={{ height: "40px" }}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter Category Name"
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
                Add Category
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategory;
