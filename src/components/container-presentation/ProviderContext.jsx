import React, { createContext, useContext, useState } from "react";

// const GrandParentContext = createContext(null);
const GrandParentContext = createContext({});
const ProviderContext = () => {
  const [innerChildBody, setInnerChildBody] = useState("");
//   const name = "GrandParent Name is xyz";
  return (
    <div>
      {/* <GrandParentContext.Provider value={name}>
        <GrandParent name={name} />
      </GrandParentContext.Provider> */}
      <GrandParentContext.Provider
        value={{ innerChildBody, setInnerChildBody }}
      >
        {/* <GrandParent name={name} /> */}
        <GrandParent />
      </GrandParentContext.Provider>
    </div>
  );
};
function GrandParent() {
  return (
    <>
      <h4>I am GrandParent</h4>
      <Parent></Parent>
    </>
  );
}
function Parent() {
  return (
    <>
      <h4>I am Parent</h4>
      <Child></Child>
      <Sibling></Sibling>
    </>
  );
}
function Child() {
  return (
    <>
      <h4>I am Child</h4>
      <InnerChild></InnerChild>
    </>
  );
}
function Sibling() {
  return <h4>I am Sibling</h4>;
}
function InnerChild({ name }) {
  // const grandParentName= useContext(GrandParentContext)
  // console.log("grandParentName", grandParentName)
  // return <h4>I am InnerChild {grandParentName}</h4>;
  const { innerChildBody, setInnerChildBody } = useContext(GrandParentContext);
  return <h4 onClick={()=> setInnerChildBody('Reading')}>I am InnerChild {innerChildBody}</h4>;
}


export default ProviderContext;
