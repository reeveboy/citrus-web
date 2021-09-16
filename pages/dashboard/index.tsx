import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AddBill from "../../components/AddBill";
import BillCard from "../../components/BillCard";
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
    }
  }, [user, loading]);
  // Auth Part - End
  const {data: bills, loading: b_loading} = useGetUnsettledBillsQuery()

  if (loading || !user || b_loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-xl flex">Welcome Back,&nbsp;
          <p className="font-bold"> {data.me.name.toLocaleUpperCase()}
          </p>
        </span>
        <AddBill />
      </div>
        <div className="grid gap-10 grid-cols-5 p-10">
          {bills.getUnsettledBills.map((bill) => (<BillCard bill={bill} />))}
        </div>
    </div>
  );
}

export default withApollo(Dashboard);
