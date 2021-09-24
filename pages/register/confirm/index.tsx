import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import Layout2 from "../../../components/Layout2";
import { MeDocument, useConfirmUserMutation, useMeQuery, useResendVerificationCodeMutation } from "../../../generated";
import withApollo from "../../../lib/withApollo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const index = () => {
  const router = useRouter();

  // Auth ---> Start
  const { data, loading } = useMeQuery();
  const user = data?.me;
  useEffect(() => {
    if (user && !loading && user.confirmed) {
      router.push("/dashboard");
    }
  }, [user, loading]);
  // Auth ---> End

  const [code, setCode] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const [confirmUser, {loading: confirm_loading}] = useConfirmUserMutation({refetchQueries: [MeDocument]})

  const [resendVerificationCode] = useResendVerificationCodeMutation()

  // const [disableBtn, setDisableBtn] = useState(false)

  const handleChange = (e) => {
    const input = e.target.value
    const lastChar = input[input.length - 1]
    if (( lastChar === undefined || lastChar === '1' || lastChar === '2' || lastChar === '3' || lastChar === '4' || lastChar === '5' || lastChar === '6' || lastChar === '7' || lastChar === '8' || lastChar === '9' || lastChar === '0')) {
      setCode(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (code.length < 6) {
      return
    }

    const res = await confirmUser({variables: {code}})

    if (!res.data.confirmUser) {
      setCode('')
      return
    }

    router.push('/dashboard')
  }

  const handleResendCode = async () => {
    // if (disableBtn) {
    //   return
    // }

    await resendVerificationCode()
  }

  if (loading || !user || confirm_loading) {
    return (
    <Layout2>
      <div>Loading..</div>
    </Layout2>
    );
  }

  return (
    <Layout2>
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
        <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
      </svg>
      <h3 className="mt-2 text-3xl font-semibold">Confirm Your Account</h3>
      <span className="mt-2 font-light text-center">
        Please confirm your account by entering
        the verification code sent to your email.
      </span>
      <div className="flex flex-col items-center relative">
        <span className={classNames(
          isFocus ? "text-greyText" : "text-black",
          "mt-2 text-3xl tracking-widest"
        )}>
          <span className={classNames(
            code[0] ? 'text-black' : '',
              'border-b border-black' 
          )}>{code[0] ? code[0] : '0'}</span>&nbsp;
          <span className={classNames(
            code[1] ? 'text-black' : '',
            'border-b border-black'
          )}>{code[1] ? code[1] : '0'}</span>&nbsp;
          <span className={classNames(
            code[2] ? 'text-black' : '',
            'border-b border-black'
          )}>{code[2] ? code[2] : '0'}</span>&nbsp;
          <span className={classNames(
            code[3] ? 'text-black' : '',
            'border-b border-black'
          )}>{code[3] ? code[3] : '0'}</span>&nbsp;
          <span className={classNames(
            code[4] ? 'text-black' : '',
            'border-b border-black'
          )}>{code[4] ? code[4] : '0'}</span>&nbsp;
          <span className={classNames(
            code[5] ? 'text-black' : '',
            'border-b border-black'
          )}>{code[5] ? code[5] : '0'}</span>&nbsp;
        </span>
        <form onSubmit={handleSubmit} className="absolute top-3 opacity-0" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
          <input onChange={handleChange} type="text" value={code} maxLength={6}  className="px-1 py-1" />
        </form>
      </div>
      <button onClick={handleSubmit} className='mt-3 text-center text-white rounded-lg px-3 py-2 bg-blue-500 hover:bg-blue-700'>
        Submit
      </button>
      <span className="mt-2 text-sm font-light text-center">
        It may take a minute to recieve your code.
        Haven’t recieved it? <span onClick={handleResendCode} className="text-blueLight hover:text-blueDark" style={{cursor: 'pointer'}}>Resend a new code.</span> 
      </span>
    </Layout2>
  );
};

export default withApollo(index);
