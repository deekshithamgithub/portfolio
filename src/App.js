
import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-[#111827]/80 sticky top-0 z-50 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          Deekshitha M
        </h1>

        <div className="space-x-6 text-gray-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#dsa" className="hover:text-cyan-400 transition">
            DSA
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-32 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-cyan-400">Deekshitha M</span>
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Software Developer passionate about building scalable web
          applications and solving real-world problems.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-xl transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h3 className="text-4xl font-bold mb-8 text-center text-cyan-400">
          About Me
        </h3>

        <div className="bg-[#1e293b] rounded-3xl p-8 shadow-xl border border-gray-800">
          <p className="text-gray-300 leading-8 text-lg">
            I am a passionate Full Stack Developer with strong interest in
            modern web technologies, problem solving, and building impactful
            applications. I enjoy learning new technologies and creating
            user-friendly digital experiences.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-20 bg-[#111827]"
      >
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Project 1 */}
          <div className="bg-[#1e293b] p-7 rounded-3xl border border-gray-800 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">
            <h4 className="text-2xl font-bold mb-3">
              AiPharma-X
            </h4>

            <p className="text-gray-400 leading-7">
              AI-powered drug repurposing platform built for healthcare and
              research innovation.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://ai-pharma-x.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/deekshithamgithub/AiPharmaX.git"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#1e293b] p-7 rounded-3xl border border-gray-800 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">
            <h4 className="text-2xl font-bold mb-3">
              EvalDesk
            </h4>

            <p className="text-gray-400 leading-7">
              Event evaluation platform with scoring analytics and performance
              tracking.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://eval-desk.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/deekshithamgithub/eval_desk"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#1e293b] p-7 rounded-3xl border border-gray-800 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-300">
            <h4 className="text-2xl font-bold mb-3">
              Expense Tracker
            </h4>

            <p className="text-gray-400 leading-7">
              Personal expense tracker with analytics, budgeting, and category
              management.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="https://deeksh-expense-tracker.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/deekshithamgithub/personal-expense-tracker"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Backend
              </a>

              <a
                href="https://github.com/deekshithamgithub/personal-expense-tracker-frontend"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
              >
                Frontend
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DSA */}
      <section
        id="dsa"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Problem Solving
        </h3>

        <div className="bg-[#1e293b] rounded-3xl p-8 border border-gray-800 shadow-xl text-center">
          <p className="text-gray-300 text-lg leading-8">
            Strong understanding of Data Structures and Algorithms including
            Arrays, Strings, Recursion, Trees,Two pointers, Sliding Window, Hashing, and
            Dynamic Programming.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-20 text-center bg-[#111827]"
      >
        <h3 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact
        </h3>

        <p className="text-gray-300 text-lg">
          deekshitham179@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Deekshitha M. All rights reserved.
      </footer>
    </div>
  );
}
