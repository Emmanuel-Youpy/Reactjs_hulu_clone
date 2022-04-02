import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Result";
import { useState } from "react";
import requests from "./requests";
import Footer from "./Footer";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />

      <Result selectedOption={selectedOption} />

      <Footer />
    </div>
  );
}

export default App;
