import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import User from "./components/User";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <User />
      </ApolloProvider>
    </div>
  );
}

export default App;
