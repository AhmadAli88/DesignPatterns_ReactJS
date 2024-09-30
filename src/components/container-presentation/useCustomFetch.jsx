import React, { useEffect, useState } from "react";

const useCustomFetch = ({url}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
      setIsLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            console.log("data", data);
            setIsLoading(false);
            setData(data);
          }, 2000); 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false); 
        });
    }, []);
  return {isLoading, data}
}

export default useCustomFetch