import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home.js";
import NavBar from "./components/Nav.js";
import NpcNames from "./components/NpcNames";
import Encounters from "./components/Encounters";
import Loot from "./components/Loot";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="npc-names" element={<NpcNames />} />
            <Route path="encounters" element={<Encounters />} />
            <Route path="loot" element={<Loot />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;