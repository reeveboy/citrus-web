import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useMeQuery, useRegisterMutation } from "../../generated";
import withApollo from "../../lib/withApollo";
import {useEffect} from 'react'
import Layout from "../../components/Layout";
import Link from 'next/link'
import Layout2 from "../../components/Layout2";

const Register = () => {
  const router = useRouter();

  // Auth ---> Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, [user, loading]);
  // Auth ---> End

  const [register, {loading: register_loading}] = useRegisterMutation()

  if (loading || user || register_loading) {
    return (
    <Layout2>
      <div>Loading..</div>
    </Layout2>
    );
  }

  return (
    <Layout2>
        <h3 className="text-3xl font-semibold">Register</h3>
        <p className="mt-1">
          Already have an account?{" "}
          <Link href="/login" >
            <a className="text-blueLight hover:text-blueDark">
              Sign in
            </a>
          </Link>
        </p>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            
            const res = await register({
              variables: values,
              update: (cache, { data: data_register }) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: "Query",
                    me: data_register.register,
                  },
                });
              },
            });

            setSubmitting(false);

            if (res) {
              router.push('/register/confirm')
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
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter your restuarant name"
                type="text"
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
                className="hover:bg-blue-700 shadow bg-blue-500 text-white text-center rounded mt-4 px-3 py-2 w-full"
                type="submit"
                disabled={isSubmitting}>
                  Sign up
              </button>
            </Form>
          )}
        </Formik>
    </Layout2>
  );
};

export default withApollo(Register);
