import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/new" exact component={StreamCreate} />
        <Route path="/edit" exact component={StreamEdit} />
        <Route path="/delete" exact component={StreamDelete} />
        <Route path="/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
