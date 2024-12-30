import "./App.css";
import CardItem from "./Components/CardItem";
//Import Grid Component
import Grid from "@mui/material/Grid";
import ListCards from "./Components/ListCards";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  const handelChange = (e) => {
    setValue(e);
  };
  const [data, setData] = useState({ key: "", name: "", price: 0, count: 0 });
  const handelUpdate = (item) => {
    setData(item);
  };
  return (
    <div className="App">
      <Grid
        container
        className="GridContainer"
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
        }}
        spacing={2}
      >
        <h1 className="typography">Desserts</h1>
        <Grid
          className="GridItem"
          item
          xs={7}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: 5,
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {" "}
          <CardItem onValueChange={handelChange} onDataUpdate={handelUpdate} />
        </Grid>
        <Grid className="GridItem-two" item xs={5}>
          <ListCards dataItems={data} count={value} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
