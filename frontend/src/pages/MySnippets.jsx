import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MySnippets() {
  const [snippets, setSnippets] = useState([]);
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  const fetchSnippets = async () => {
    const res = await fetch("http://localhost:2002/api/code/my", {
      headers: { Authorization: "Basic " + btoa(email + ":" + password) },
    });
    if (res.ok) {
      setSnippets(await res.json());
    } else {
      console.error("Failed to fetch snippets");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this snippet?")) return;
    const res = await fetch(`http://localhost:2002/api/code/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Basic " + btoa(email + ":" + password) },
    });
    if (res.ok) {
      fetchSnippets();
    } else {
      alert("Failed to delete snippet");
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl text-blue-400 mb-4">My Snippets</h2>

      {snippets.length === 0 && (
        <p className="text-gray-400 text-center">No snippets found!</p>
      )}

      {snippets.map((s) => (
        <div
          key={s.id}
          className="bg-gray-800 p-4 rounded-md mb-3 border border-gray-700 shadow-md"
        >
          <h3 className="text-xl font-bold text-blue-300">{s.title}</h3>
          <p className="text-gray-400 mb-2 italic">Language: {s.language}</p>

          {/* ✅ Description added here */}
          {s.description && s.description.trim() !== "" && (
            <p className="text-gray-300 mb-2">
              <strong>Description:</strong> {s.description}
            </p>
          )}

          <pre className="bg-black text-green-400 p-2 rounded mt-2 overflow-x-auto whitespace-pre-wrap">
            {s.code}
          </pre>

          <div className="mt-3 flex gap-3">
            <Link
              to={`/edit/${s.id}`}
              className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(s.id)}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
