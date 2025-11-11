import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white p-10"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/h-t-m-l-java-script-code-snippet-ayqcbv6m49xiu29p.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">About Code Snippet Library</h1>
        <p className="text-lg leading-relaxed text-gray-200">
          The Code Snippet Library is a simple yet powerful tool where users can store, manage,
          and share their favorite programming snippets. It supports multiple languages and
          keeps your work organized by user login.
        </p>
      </div>
    </div>
  );
}

