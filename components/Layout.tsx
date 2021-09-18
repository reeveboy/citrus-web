import { useRouter } from "next/router";
import Link from "next/link";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-primary to-secondary h-screen w-screen p-4 flex justify-center items-center">
      {router.pathname !== "/login" ? (
        <div className="bg-white rounded  h-full w-full flex flex-col">
          <div className="w-full h-14 border-b border-black flex items-center p-2">
            <Link href={`/dashboard`} as={`/dashboard`}>
              <a>
                <span className="text-3xl">CITRUS</span>
              </a>
            </Link>
          </div>
          <div className="p-2 overflow-y-auto h-full">{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Layout;
