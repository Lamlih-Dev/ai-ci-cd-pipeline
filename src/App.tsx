import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <textarea
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      <div dangerouslySetInnerHTML={{ __html: userInput }} />
    </>
  );
}

export default App;