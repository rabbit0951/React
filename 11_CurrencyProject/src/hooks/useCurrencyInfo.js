import { useEffect, useState } from "react";

function useCurrencyInfo(currency, date = "latest", version = "v1") {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
          )
            .then((res) =>{return res.json()}
            )
            .then((res) => {
              setData(res[currency]);
            });
        
    } catch (error) {
        console.log("Error in API response")
        throw error;
    }

  }, [currency]);
  
  return data;
}

export default useCurrencyInfo;
