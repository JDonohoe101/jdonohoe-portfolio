
export default function Projects({ projects }) {
    return (
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-12 font-inter"
      >
        <h2 className="text-4xl text-secondary font-bold mb-8 text-center">PROJECTS</h2>
        <a>Projects can be viewed upon request</a>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-grey-text font-black text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-grey-text mb-4">{project.description}</p>
  
              {/* Tags container */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-picton-blue text-white text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
  
              {/* <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                View Project
              </a> */}
            </div>
          ))}
        </div>
      </section>
    );
  }
  