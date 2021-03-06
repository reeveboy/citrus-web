import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AddBill from "../../components/AddBill";
import BillCard from "../../components/BillCard";
import Layout from "../../components/Layout";
import { useGetUnsettledBillsQuery, useMeQuery } from "../../generated";
import withApollo from "../../lib/withApollo";

function Dashboard() {
  const router = useRouter();
  
  // Auth Part - Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
      return
    }
    if (!(user?.confirmed || loading)) {
      router.push('/register/confirm')
    }
  }, [user, loading]);
  // Auth Part - End
  
  const {data: bills, loading: b_loading, refetch} = useGetUnsettledBillsQuery()

  useEffect(() => {
    refetch()
  }, [])

  if (loading || !user || !user.confirmed || b_loading) {
    return (
      <Layout>
        <div>Loading..</div>
      </Layout>
    );
  }

  if (bills.getUnsettledBills.length === 0) {
    return (
      <Layout>
        <div className="h-full">
          <div className="flex justify-between">
            <span className="text-xl flex">Welcome Back,&nbsp;
              <p className="font-bold"> {data.me.name.toLocaleUpperCase()}
              </p>
            </span>
            <AddBill />
          </div>

          <div className="flex justify-center items-center h-full">
            <span className="mb-20 font-extralight text-base text-gray-600">Looks like theres not much work for the day...</span>
          </div>

        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <div className="flex justify-between">
          <span className="text-xl flex">Welcome Back,&nbsp;
            <p className="font-bold"> {data.me.name.toLocaleUpperCase()}
            </p>
          </span>
          <AddBill />
        </div>
          <div className="grid gap-10 grid-cols-5 p-10">
            {bills.getUnsettledBills.map((bill, idx) => (<BillCard key={idx} bill={bill} />))}
          </div>
      </div>
    </Layout>
  );
}

export default withApollo(Dashboard);
