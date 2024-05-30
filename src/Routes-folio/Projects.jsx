import data from "../data.json";
import CardsProject from "./Components/cards_project/CardsProject";

function Projects() {
  const projects = data[3].proj;

  console.log(data[6]);

  return (
    <>
      <section className="container m-auto">
        <h1 className="title-top">
        🎇 Main projects 🎇
        </h1>
        <section className="row justify-content-center gap-3 py-2 w-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-lg align-items-center"
              style={{ maxWidth: "330px", width:"fit-content" }}
            >
              <CardsProject
                title={project.title}
                urlImg={project.img}
                description={project.description}
                fold={project.fold}
                stack={project.stack}
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
}

export default Projects;
