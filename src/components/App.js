import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
     <h1>#Home</h1>
    );
}
Home()

function About() {
  return (
    
      <h2>#About</h2>

  );
}
About()


function App() {
  return (
    <div>
      <NavBar />
      {<h1>Home</h1>}
      {<h2>About</h2>}
     <NavBar/>
    </div>
  );
}

export default App;
