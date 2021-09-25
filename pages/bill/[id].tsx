import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Orders from "../../components/Orders";
import TypeAhead from "../../components/TypeAhead";
import { GetBillDocument, GetUnsettledBillsDocument, useAddOrderMutation, useDeleteBillMutation, useGetBillQuery, useGetItemsQuery, useMeQuery, useSettleBillMutation } from "../../generated";
import withApollo from "../../lib/withApollo";
import {Form as form} from 'react-bootstrap'
import DeleteBillButton from "../../components/DeleteBillButton";
import Layout from "../../components/Layout";



const Bill = () => {
  const router = useRouter();

  // Auth Part - Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
      return
    }
    if ((!(user?.confirmed || loading))) {
      router.push('/register/confirm')
    }
  }, [user, loading]);
  // Auth Part - End

  const bill_id = parseInt(router.query.id as string);
  const {data: bill, loading: b_loading} = useGetBillQuery({variables: {bill_id}})

  const {data: items, loading: i_loading} = useGetItemsQuery()
  const [selected, setSelected] = useState(null)

  const [addOrder] = useAddOrderMutation({refetchQueries: [GetBillDocument]})

  const [settleBill] = useSettleBillMutation()

  const handleSettleBill = async () => {
    await settleBill({variables: {bill_id: parseInt(bill.getBill.bill_id)}})
    router.push('/dashboard')
  }

  if (loading || !user || !user.confirmed || b_loading || i_loading) {
    return (
    <Layout>
      <div>Loading..</div>
    </Layout>
    );

  }

  if (!items) {
    return <div>Add some items first</div>
  }

  return (
    <Layout>
      <div className="flex h-full">
        <div className="flex flex-col border-r border-black pr-2" style={{flex: '3'}}>
          <div className="flex justify-between items-center">
            <span className="text-3xl font">T - {bill.getBill.table_no}</span>
            <div>
              <Formik
                initialValues={{ quantity: '' }}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true)

                  if (selected.length === 0) {
                    setSubmitting(false);
                    return
                  }
                  if (values.quantity === '0' || values.quantity === '') {
                    setSubmitting(false);
                    return
                  }
                  await addOrder({variables: {bill_id, item_id: parseInt(selected[0].item_id), quantity: parseInt(values.quantity, 10)}})

                  values.quantity = ''
                  setSelected([])
                  setSubmitting(false);
                }}>
                {({ handleChange, handleBlur, values, isSubmitting }) => (
                  <Form className="flex">
                    <TypeAhead items={items} setSelected={setSelected} isSubmitting={isSubmitting} />
                    
                    <form.Control 
                      className="ml-2"
                      style={{width: '60px', height: '40px'}}
                      size="sm"
                      name="quantity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.quantity}
                      placeholder="Qty"
                      type="number"
                    />

                    <button
                      className="ml-2 w-10 h-10 bg-emerald rounded-full flex justify-center items-center hover:bg-emeraldDark"
                      type="submit"
                      disabled={isSubmitting}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="bi bi-plus text-white"
                        width="40"
                        height="40"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </button>
                    
                  </Form>
                )}
              </Formik>
            </div>
          </div>

        <Orders orders={bill.getBill.orders} bill_id={bill_id} />
        </div>
        <div className="flex justify-center items-center h-full" style={{flex: '2'}}>
          <div className="flex flex-col bg-gray-100 p-2 rounded-lg">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <span className="text-xl">Total: </span>
                <span className="text-xl">&#8377;{bill.getBill.netAmount}.00</span>
              </div>
              <div className="mt-1 flex flex-row justify-between items-center">
                <button className="text-xl bg-blueLight px-1 py-1 rounded-lg text-white hover:bg-blueDark">Offers: </button>
                <span className="text-xl">&#8377;0.00</span>
              </div>
              <div className="mt-2 flex flex-row justify-between items-center">
                <button className="text-xl bg-redLight px-1 py-1 rounded-lg text-white hover:bg-redDark">Tax: </button>
                <span className="text-xl">&#8377;0.00</span>
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <span className="text-xl">Net Amount: </span>
                <span className="text-xl">&#8377;{bill.getBill.netAmount}.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                onClick={handleSettleBill}
                disabled={bill.getBill.orders.length === 0}
                className="px-2 py-2 text-xl bg-emerald rounded-lg text-white hover:bg-emeraldDark"
              >
                Settle Bill
              </button>
              <button
                disabled={bill.getBill.orders.length === 0}
                className="ml-4 px-2 py-2 text-xl bg-purpleLight rounded-lg text-white hover:bg-purpleDark"
              >
                Print Bill
              </button>
              <DeleteBillButton bill_id={bill.getBill.bill_id} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo(Bill);
