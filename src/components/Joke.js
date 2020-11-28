import { Card, Divider, Typography } from "@material-ui/core";
import React from "react";
import { useFetch } from "./hooks";

export default function Joke() {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    []
  );
  return (
    <div>
      <Typography variant="h6">Joke</Typography>
      <Typography variant="h4">{setup}</Typography>
      <Divider/>
      <Typography variant="h6" color='primary'>
        <em>{punchline}</em>
      </Typography>
    </div>
  );
}
