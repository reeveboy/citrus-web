import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Orders from "../../../components/Orders";
import TypeAhead from "../../../components/TypeAhead";
import { GetBillDocument, useAddOrderMutation, useGetBillQuery, useGetItemsQuery, useMeQuery } from "../../../generated";
import withApollo from "../../../lib/withApollo";


const Bill = () => {
  const router = useRouter();

  // Auth Part - Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);
  // Auth Part - End

  const bill_id = parseInt(router.query.id as string);
  const {data: bill, loading: b_loading} = useGetBillQuery({variables: {bill_id}})

  const {data: items, loading: i_loading} = useGetItemsQuery()
  const [selected, setSelected] = useState(null)

  const [addOrder] = useAddOrderMutation({refetchQueries: [GetBillDocument, 'getBill']})

  if (loading || !user || b_loading || i_loading) {
    return <div>Loading..</div>;
  }

  if (!items) {
    return <div>Add some items first</div>
  }

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl ">Table Number: {bill.getBill.table_no}</h2>
        <Formik
          initialValues={{ quantity: null }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            await addOrder({variables: {bill_id, item_id: parseInt(selected[0].item_id), quantity: values.quantity}})

            setSubmitting(false);
          }}>
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <Form className="flex mt-3">

            
              <TypeAhead items={items} setSelected={setSelected} />
              
              <input
                className="ml-4 shadow-md w-24 appearance-none border rounded py-1 px-3 text-grey-darker"
                name="quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                placeholder="Qty"
                type="number"
              />
              <button
                className="ml-4 hover:bg-blue-700 shadow bg-blue-500 rounded px-3 py-1 text-white"
                type="submit"
                disabled={isSubmitting}>
                <p className="text-gray-200">Add</p>
              </button>
            </Form>
          )}
        </Formik>
        <Orders orders={bill.getBill.orders} />
        <div className="text-xl mt-4 flex justify-between">
          <span>
            Net Amount: <span>&#8377;</span>
            {bill.getBill.netAmount}
          </span>
          <button className="rounded-lg bg-green-400 px-4 py-1 text-white">
            Settle
          </button>
        </div>
      </div>
    </div>
  );
};

export default withApollo(Bill);
