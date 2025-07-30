// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" width="300" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
