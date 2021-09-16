import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BillCard from "../../components/BillCard";
import { GetUnsettledBillsDocument, useCreateBillMutation, useGetUnsettledBillsQuery, useMeQuery } from "../../generated";
import withApollo from "../../lib/withApollo";

function Dashboard() {
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
  const {data: bills, loading: b_loading} = useGetUnsettledBillsQuery()

  const [createBill] = useCreateBillMutation({refetchQueries: [GetUnsettledBillsDocument, 'getUnsettledBills']})
  
  if (loading || !user || b_loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <div>{data.me.name.toLocaleUpperCase()}</div>
      <Formik
          initialValues={{tableNo: null }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            if (!values.tableNo) {
              setSubmitting(false);
              return
            }
            await createBill({variables: {table_no: values.tableNo}})
            
            setSubmitting(false);
            resetForm()
          }}>
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form className="mt-2 w-60">
              <input
                className="shadow-md appearance-none w-full mt-4 border rounded py-2 px-3 text-grey-darker"
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
                className="hover:bg-blue-700 shadow bg-blue-500 rounded mt-4 px-3 py-1 w-full text-gray-600 text-center"
                type="submit"
                disabled={isSubmitting}>
                <p className="text-gray-200">Submit</p>
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex flex-wrap">
          {bills.getUnsettledBills.map((bill) => (<BillCard bill={bill} />))}
        </div>
    </div>
  );
}

export default withApollo(Dashboard);
