import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import AddItem from "../components/AddItem";
import Items from "../components/Items";
import Layout from "../components/Layout";
import { useGetCategoriesQuery, useGetItemsQuery, useMeQuery } from "../generated";
import withApollo from "../lib/withApollo";

const items = () => {
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

  const {data: all_items, loading: i_loading, refetch} = useGetItemsQuery()

  const {data: categories, loading: c_loading} = useGetCategoriesQuery()

  const [search, setSearch] = useState('')

  useEffect(() => {
    refetch({search})
  }, [search])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  if (loading || !user || i_loading || c_loading ) {
    return (
    <Layout>
      <div>Loading..</div>
    </Layout>
    );
  }

  return (
  <Layout>
    <div className="flex h-full">
      <div className="flex flex-col border-r border-black pr-2" style={{flex: '3'}}>
        <div className="flex justify-between">
          <span className="text-3xl">/Restuarant Name/</span>
          <div>
            <form  className="flex items-center">
              <input  
                className="rounded-lg px-2 border"
                style={{ height: "40px" }}
                name="search"
                onChange={handleSearchChange}
                value={search}
                placeholder="Search an Item"
                type="text"
                autoComplete="off"
              />
              <button 
                className="ml-2 transform transition duration-150 ease-in hover:scale-125"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className=" overflow-y-scroll ">

        <Items items={all_items.items} categories={categories.categories} />
        </div>
      </div>
      <div className="flex flex-col pl-2 h-full justify-start" style={{flex: '2'}}>
        <AddItem categories={categories.categories} />
        {/* <AddCategory /> */}
        <div className="mt-2 flex justify-center">
          <button style={{height: '50px'}} className="mr-4 flex items-center text-white px-3 rounded-lg bg-yellowLight hover:bg-yellowDark">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
            <span style={{fontSize: '1.1rem'}} className="ml-2">
              Import Items
            </span>
          </button>
          <button style={{height: '50px'}} className="flex items-center text-white px-3 rounded-lg bg-blueLight hover:bg-blueDark">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <span style={{fontSize: '1.1rem'}} className="ml-2">
              Export Items
            </span>
          </button>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default withApollo(items);
