import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "ChitChat",
      description: "A chat app using node.js",
      liveLink: "https://chitchat-ih6h.onrender.com"
    }
  ];

  return (
    <section id="projects" style={{ padding: "2rem", background: "#8d87edff" }}>
      <h2>Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} style={{ margin: "1rem 0", border: "1px solid #0df7a5ff", padding: "1rem" }}>
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <a href={proj.liveLink} target="_blank">Live Demo</a>
        </div>
      ))}
    </section>
  );
}
