import React from "react";
import "./Main.css";
import Card from "./cards/Card";

const Main = () => {
  return (
    <div className="main">
      <div className="main1">
        <h1>sidebar</h1>
      </div>
      <div className="main2">
        <Card
          title={"wokspace"}
          p={"hello world"}
          imag={
            "https://images.unsplash.com/photo-1663660374106-87adf01ae522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
        <Card
          title={"activities"}
          imag={
            "https://images.unsplash.com/photo-1663660374106-87adf01ae522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
        <Card
          title={"agriculture"}
          imag={
            "https://images.unsplash.com/photo-1663666964492-0b8b83a6dd18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          }
        />

<Card
          title={"agriculture"}
          imag={
            "https://images.unsplash.com/photo-1663666964492-0b8b83a6dd18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          }
        />

<Card
          title={"agriculture"}
          imag={
            "https://images.unsplash.com/photo-1663666964492-0b8b83a6dd18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          }
        />
      </div>
    </div>
  );
};

export default Main;
