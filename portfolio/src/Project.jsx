import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Ghuumo India",
      description:
        "A travel website showcasing destinations and tour packages using React, HTML, and CSS.",
      image: "https://via.placeholder.com/300x180?text=Ghuumo+India",
      link: "https://github.com/akhils01311/ghuumo-india",
    },
    {
      name: "To-Do App",
      description:
        "A simple and elegant task management app built with React JS and local storage.",
      image: "https://via.placeholder.com/300x180?text=To-Do+App",
      link: "https://github.com/akhils01311/todo-app",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="card-container">
        {projectList.map((p, index) => (
          <div className="card" key={index}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
