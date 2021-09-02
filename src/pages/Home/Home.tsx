import { useReactiveVar } from "@apollo/client";
import React from "react";
import { counter } from "utils/apollo";

export const Home: React.FC = () => {
  const count = useReactiveVar(counter);

  return (
    <>
      <h1>Counter</h1>
      <p>Value: {count}</p>
      <button type="button" onClick={() => counter(count + 1)}>
        +1
      </button>
    </>
  );
};
