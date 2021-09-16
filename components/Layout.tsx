import { useRouter } from "next/router";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-primary to-secondary h-screen w-screen p-4 flex justify-center items-center">
      {router.pathname !== "/login" ? (
        <div className="bg-white rounded  h-full w-full">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Layout;
