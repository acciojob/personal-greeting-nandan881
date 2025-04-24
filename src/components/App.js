import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor="name-input">Enter your name:</label>
      <br />
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name && <h2>Hello {name}!</h2>}
    </div>
  );
};

export default App;