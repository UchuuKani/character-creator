import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 
      add a div with fixed positioning to achieve task 4. Using fixed so that the 
      background remains fixed in the viewport. Giving "height: 40%" to set the background
      div to be 40% of the viewport height, and giving it a "bottom: 0px" to 
      position the div starting from the bottom of the viewport

      in actuality, I'm not sure if the dimensions are working as required by the
      exercise, but to me this seems like it would achieve the desired effect

      another thing to note: I am specifically placing this div above the 
      CharacterEditor component in the dom because I create a stacking context
      on the "root" dom element by applying "isolation: isolate", and then also
    */}
      <div
        style={{
          width: "100%",
          height: "40%",
          position: "fixed",
          backgroundColor: "hsl(195deg, 20%, 86%)",
          bottom: "0px",
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
