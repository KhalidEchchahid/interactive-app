import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Setvalue from "./course/Setvalue"
import './style.css'
/*
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp 
*/

function App() {
  return (

    <div className="App">
      < Header />
      <div className="container">
        <Meme />
      </div>
      < Setvalue />
    </div>
  );
}

export default App;
