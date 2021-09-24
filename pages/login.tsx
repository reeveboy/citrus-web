import { Formik, Form, Field } from "formik";
import { MeDocument, MeQuery, useLoginMutation, useMeQuery } from "../generated/index";
import { useRouter } from "next/router";
import withApollo from "../lib/withApollo";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Link from 'next/link'
import Layout2 from "../components/Layout2";

const Login = () => {
  const router = useRouter();
  const [login, {loading: login_loading}] = useLoginMutation();

  // Auth ---> Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user, loading]);
  // Auth ---> End

  if (loading || user || login_loading) {
    return (
    <Layout2>
      <div>Loading..</div>
    </Layout2>
    );
  }
  return (
    <Layout2>
        <h3 className="text-3xl font-semibold">Login</h3>
        <p className="mt-1">
          Don't have an account?{" "}
          <Link href="/register" >
            <a className="text-blueLight hover:text-blueDark">
              Sign up
            </a>
          </Link>
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            const res = await login({
              variables: values,
              update: (cache, { data: data_login }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: "Query",
                    me: data_login.login,
                  },
                });
              },
            });
            setSubmitting(false);
            if (res) {
              router.push('/dashboard')
            }
          }}>
          {({ isSubmitting, handleChange, handleBlur, values }) => (
            <Form className="w-4/5">
              <input
                className="shadow-md appearance-none w-full mt-4 border rounded py-2 px-3 text-grey-darker"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                type="email"
                autoComplete="off"
              />
              <input
                className="shadow-md appearance-none w-full mt-4 border rounded py-2 px-3 text-grey-darker"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                type="password"
              />
              <button
                className="hover:bg-blue-700 shadow bg-blue-500 text-white text-center rounded mt-4 px-3 py-2 w-full "
                type="submit"
                disabled={isSubmitting}>
                Log in
              </button>
            </Form>
          )}
        </Formik>
        <a href="#" className="mt-2 text-sm text-blue-500">
          Forgot Password?
        </a>
    </Layout2>
  );
};

export default withApollo(Login);
