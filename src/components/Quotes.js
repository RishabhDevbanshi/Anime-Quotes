import React from "react";
import useFetch from "./useFetch";

function Quotes({click}) {
    let quote = {
        anime : null,
        character : null,
        quote : null
    }
    quote = useFetch({click})

  return (
    <div className="quote">
      <div className="anime" title={quote.anime ? quote.anime : 'loading'}>
        {quote.anime}
      </div>

      <blockquote>
        {quote.quote}
      </blockquote>

      <div className="character">{quote.character}</div>
    </div>
  );
}

export default Quotes;
