import React from "react";
import "./App.css";
import Nav from "./component/navbar";
import Footer from "./component/footer";
import FirstImg from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="title">BMW SERIE 3</h1>
      <img className="img" id="img1" src={FirstImg} />
      <iframe
        className="img"
        controls
        loop
        id="vid"
        src="https://www.youtube.com/embed/E3adNihcCRE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img className="img" id="img2" src={"/imageInPublic.jpg"} />
      <img id="lights" src={"/bmwlights.jpg"} />
      <Footer />
    </div>
  );
}

export default App;
