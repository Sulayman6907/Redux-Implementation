import React from "react";
import { Button, Text, Heading } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#7D4CDB50",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "48px",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "5x",
        }}
      >
        <Heading
          style={{
            fontFamily: " 'Praise', cursive,'JetBrains Mono', monospace",
          }}
        >
          {" "}
          State Management using Redux
        </Heading>
        <div>
          <Button
            primary
            size="large"
            style={{ marginRight: "20px" }}
            label="Derement"
            onClick={() => dispatch(decrement())}
          ></Button>
          <Text>{count}</Text>
          <Button
            primary
            size="large"
            style={{ marginLeft: "20px" }}
            label="Inrement"
            onClick={() => dispatch(increment())}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
