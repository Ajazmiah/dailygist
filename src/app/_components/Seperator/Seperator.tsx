import React from "react";

function Seperator({ customClasses }: { customClasses: string }) {
  return <div className= {`bg-black bg-opacity-14 ${customClasses}`}></div>;
}

export default Seperator;
