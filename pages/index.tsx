import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated";
import withApollo from "../lib/withApollo";

function Home() {
  // const router = useRouter();
  return (
    <div>
      <div>INDEX PAGE</div>
    </div>
  );
}

export default withApollo(Home);
