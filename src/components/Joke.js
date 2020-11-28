import React from "react";
import { useFetch } from "./hooks";

export default function Joke() {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    []
  );
  return (
    <div>
      <h2>Joke</h2>
      <h1>{setup}</h1>
      <h2>
        <em>{punchline}</em>
      </h2>
    </div>
  );
}
