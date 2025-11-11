import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d8/f5/7d/d8f57df5e62a1eeb29c38c76ed21ad00.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/60 to-black/80"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-3">
          Welcome to Code Snippet Library
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your personal space to store and manage programming snippets.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
}
