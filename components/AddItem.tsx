import React from "react";
import { Formik, Form } from "formik";
import { GetItemsDocument, useAddItemMutation } from "../generated";

const AddItem = ({ categories }) => {
  const [addItem] = useAddItemMutation({ refetchQueries: [GetItemsDocument] });
  return (
    <div className="flex flex-col p-2 rounded-lg bg-gray-100">
      <span className="text-xl border-b border-black">Add New Item</span>
      <Formik
        initialValues={{ name: "", rate: "", category_id: "" }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          if (!values.name || !values.rate || !values.category_id) {
            return;
          }

          await addItem({
            variables: {
              name: values.name,
              rate: parseInt(values.rate),
              category_id: parseInt(values.category_id),
            },
          });
          resetForm();
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
              <select
                className="rounded-lg px-2"
                style={{ height: "40px", width: "210px" }}
                name="category_id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category_id}>
                <option value="" selected>
                  Select a Category
                </option>
                {categories.map((category, idx) => (
                  <option key={idx} value={category.category_id}>
                    {category.name}
                  </option>
                ))}
              </select>
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
