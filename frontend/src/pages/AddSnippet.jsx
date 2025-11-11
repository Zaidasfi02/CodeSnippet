import React, { useState } from "react";

export default function AddSnippet() {
  const [snippet, setSnippet] = useState({ title: "", language: "", code: "", description: "" });
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  const handleChange = (e) => setSnippet({ ...snippet, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(email + ":" + password),
      },
      body: JSON.stringify(snippet),
    });
    if (res.ok) {
      alert("Snippet added successfully!");
      setSnippet({ title: "", language: "", code: "", description: "" });
    } else {
      alert("Failed to add snippet!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md w-96">
        <h2 className="text-2xl text-blue-400 mb-4 text-center">Add Snippet</h2>
        {["title", "language", "description"].map((field) => (
          <input key={field} type="text" name={field} placeholder={field}
            value={snippet[field]} onChange={handleChange}
            className="w-full mb-3 p-2 rounded text-black" required={field !== "description"} />
        ))}
        <textarea name="code" placeholder="Code" value={snippet.code}
          onChange={handleChange} className="w-full mb-3 p-2 rounded text-black h-32" required />
        <button className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded">Add Snippet</button>
      </form>
    </div>
  );
}

