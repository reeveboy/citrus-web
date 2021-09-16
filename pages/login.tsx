import { Formik, Form, Field } from "formik";
import { MeDocument, MeQuery, useLoginMutation, useMeQuery } from "../generated/index";
import { useRouter } from "next/router";
import withApollo from "../lib/withApollo";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const { data, loading } = useMeQuery();
  const user = data?.me;

  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user, loading]);

  if (loading || user) {
    return <div>Loading..</div>;
  }
  return (
      <div className="bg-white w-96 rounded-lg flex flex-col items-center px-3 py-6">
        <h3 className="text-3xl font-semibold">Login</h3>
        <p className="mt-1">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400">
            Sign up
          </a>{" "}
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
            <Form className="mt-2 w-4/5">
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
                className="hover:bg-blue-700 shadow bg-blue-500 rounded mt-4 px-3 py-1 w-full text-gray-600"
                type="submit"
                disabled={isSubmitting}>
                <p className="text-gray-200">Log in</p>
              </button>
            </Form>
          )}
        </Formik>
        <a href="#" className="mt-2 text-sm text-blue-500">
          Forgot Password?
        </a>
      </div>
  );
};

export default withApollo(Login);
