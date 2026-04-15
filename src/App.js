import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold">Deekshitha M</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Deekshitha M 👋</h2>
        <p className="text-gray-400">Full Stack Developer | React | Node.js</p>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-300">
          I am a passionate developer building full-stack applications. I enjoy
          solving real-world problems and continuously learning new
          technologies.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 bg-gray-800">
        <h3 className="text-2xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold">EvalDesk</h4>
            <p className="text-gray-300 mt-2">
              Event evaluation platform with scoring and analytics.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://eval-desk.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>

              <a
                href="https://github.com/deekshithamgithub/eval_desk"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a href="#" className="text-blue-400">
                https://eval-desk.netlify.app/
              </a>
              <a href="#" className="text-blue-400">
                https://github.com/deekshithamgithub/eval_desk
              </a> */}
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold">Expense Tracker</h4>
            <p className="text-gray-300 mt-2">
              Track expenses with categories and insights.
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="https://deeksh-expense-tracker.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>

              <a
                href="backend:
                https://github.com/deekshithamgithub/personal-expense-tracker
                frontend:
                https://github.com/deekshithamgithub/personal-expense-tracker-frontend"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a href="#" className="text-blue-400">
                https://deeksh-expense-tracker.netlify.app/
              </a>
              <a href="#" className="text-blue-400">
                backend:
                https://github.com/deekshithamgithub/personal-expense-tracker
                frontend:
                https://github.com/deekshithamgithub/personal-expense-tracker-frontend
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* DSA Section */}
      <section id="dsa" className="px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Problem Solving (DSA)
        </h3>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          {/* <p className="text-gray-300 mb-4">
      Solved 200+ problems on platforms like LeetCode and GeeksforGeeks.
    </p> */}

          <p className="text-gray-400 mb-4">
            Strong in Arrays, Strings, Recursion, Trees, and Basic Dynamic
            Programming.
          </p>

          {/* <div className="space-x-4">
      <a
        href="https://leetcode.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >
        LeetCode Profile
      </a> */}

          {/* <a
        href="https://www.geeksforgeeks.org/user/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:underline"
      >
        GeeksforGeeks Profile
      </a> */}
          {/* </div> */}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-300">deekshitham179@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400">
        © 2026 Deekshitha M
      </footer>
    </div>
  );
}
