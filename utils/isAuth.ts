import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated";

export const isAuth = () => {
  const router = useRouter();
  const { data, loading } = useMeQuery();
  const user = data?.me
  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);
};
