// src/App.jsx
import { useState } from "react";
import { auth, signInWithGoogle } from "../firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [port, setPort] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const correctPassword = "123456"; // 🔒 Set your password

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== correctPassword) {
      setError("Incorrect password");
      return;
    }

    try {
      const response = await fetch(`http://localhost:${port}/api/image`);
      const data = await response.json();
      setImage(data.imageURL); // make sure API returns { imageURL: "..." }
      setError("");
    } catch (err) {
      setError("Failed to fetch image");
    }
  };

  return (
    <div className="p-6 font-sans">
  
        

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              className="border p-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>

          {error && <p className="text-red-600 mt-4">{error}</p>}

          {image && (
            <div className="mt-6">
              <img src={image} alt="Fetched from API" className="rounded shadow" />
            </div>
          )}
        
   
    </div>
  );
}

export default App;
