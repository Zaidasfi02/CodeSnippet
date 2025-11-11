import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSnippet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snippet, setSnippet] = useState({
    title: "",
    language: "",
    code: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  useEffect(() => {
    const fetchSnippet = async () => {
      const res = await fetch(`http://localhost:2002/api/code/${id}`, {
        headers: {
          Authorization: "Basic " + btoa(email + ":" + password),
        },
      });
      if (res.ok) {
        const data = await res.json();
        setSnippet(data);
      } else {
        alert("Unable to load snippet!");
        navigate("/my-snippets");
      }
      setLoading(false);
    };
    fetchSnippet();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSnippet({ ...snippet, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/code/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(email + ":" + password),
      },
      body: JSON.stringify(snippet),
    });
    if (res.ok) {
      alert("Snippet updated successfully!");
      navigate("/my-snippets");
    } else {
      alert("Update failed!");
    }
  };

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Edit Snippet</h2>

        <label className="block mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={snippet.title}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-black"
          required
        />

        <label className="block mb-2">Language:</label>
        <input
          type="text"
          name="language"
          value={snippet.language}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-black"
          required
        />

        <label className="block mb-2">Code:</label>
        <textarea
          name="code"
          value={snippet.code}
          onChange={handleChange}
          className="w-full p-2 mb-3 rounded text-black h-40"
          required
        ></textarea>

        <label className="block mb-2">Description:</label>
        <input
          type="text"
          name="description"
          value={snippet.description}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded text-black"
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate("/my-snippets")}
            className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

