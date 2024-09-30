import React, { useEffect, useState } from "react";
import useCustomFetch from "./useCustomFetch";

const url = "https://api.npoint.io/db27ff7629b21d9ea36c";
const Hooks = () => {
  const [mydata, setMyData] = useState("X");
  const fetchData = useCustomFetch({ url });
  const { isLoading, data } = fetchData;
  //usecase of useEffect
  useEffect(() => {
    setMyData("Y");
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>Hooks {data?.name}</div>
      <div>{mydata}</div>
    </>
  );
  //   <div> {isLoading ? <div>Loading...</div> : `Hooks ${data?.name}`}</div>   //avoid doing this
};

export default Hooks;
