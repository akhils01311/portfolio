import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Ghuumo India",
      description: "A travel website built with HTML, CSS, and React JS.",
      link: "https://github.com/akhils01311/ghuumo-india",
    },
    {
      name: "To-Do App",
      description: "A simple React-based task manager app.",
      link: "https://github.com/akhils01311/todo-app",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectList.map((p, index) => (
        <div className="project-card" key={index}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <a href={p.link} target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
