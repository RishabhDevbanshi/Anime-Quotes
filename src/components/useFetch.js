import { useEffect, useState } from "react";

function useFetch({click}) {
  const [quote, setQuote] = useState({
      anime : null , 
      character : null,
      quote : null
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };

  useEffect(() => {
    (async () => {
      const data = await fetchQuote();
      setQuote(data);
    })();
  }, [click]);

  return {anime : quote.anime , character : quote.character , quote : quote.quote};
}

export default useFetch;
