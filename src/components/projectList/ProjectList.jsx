import './ProjectList.css';

export function ProjectList({ projects }) {
    return (
      <ul>
        {projects.map((project) => (
          <div className='item' key={project.img}>
            <img src={project.img} alt="" />
          </div>
        ))}
      </ul>
    );
  }
  